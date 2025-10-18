import { s3, $, serve } from "bun";
import { Database } from "bun:sqlite";
import FormNewPost from "./html/form.html";
import AllPost from "./html/allpost.html";
import PostHTML from "./html/post.html" with { type: "text" };

const basePath = import.meta.dir;
const db = new Database(`${basePath}/blog.db`);

db.run(
	`
    CREATE TABLE IF NOT EXISTS posts (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      description TEXT NOT NULL,
      image TEXT NOT NULL,
      content TEXT NOT NULL,
      slug TEXT NOT NULL,
      created_at TEXT NOT NULL
    )
  `
);

type TypePost = {
	id: string;
	title: string;
	description: string;
	image: string;
	content: string;
	slug: string;
	created_at: string;
};


serve({
	port: 8080,
	routes: {
		// Static route - content is buffered in memory at startup
		"/favicon.ico": new Response(
			await Bun.file(`${basePath}/favicon.ico`).arrayBuffer()
		),
		"/create": FormNewPost,
		"/": AllPost,
		"/post/:slug": {
			GET: (req) => {
				const slug = req.params.slug;
				const post: TypePost = db.query("SELECT * FROM posts WHERE slug = $slug").get({
					$slug: slug,
				}) as TypePost;

				let html = PostHTML.toString()
				Object.keys(post).forEach((key: string) => {
					html = html.replaceAll('[[' + key + ']]', post[key as keyof TypePost]);
				})
				return new Response(html, {
					headers: {
						"Content-Type": "text/html",
					},
				});
			},
		},
		"/api/all-post": {
			POST: () => {
				const posts = db.query("SELECT * FROM posts").all();
				return Response.json(posts);
			},
		},
		"/api/create-post": {
			POST: async (req) => {
				const formdata = await req.formData();
				const title = formdata.get("title") ?? "";
				const description = formdata.get("description") ?? "";
				const image: File = formdata.get("image") as unknown as File;
				const content = formdata.get("content") ?? "";
				const slug = title.toString().toLowerCase().replace(/\s+/g, "-");
				const createdAt = new Date().toISOString();

				const file = s3.file(slug);
				await file.write(await image.arrayBuffer());
				const presignedFile = file.presign({
					acl: "public-read",
				});

				const query = db.query(
					"INSERT INTO posts (title, description, image, content, slug, created_at) VALUES ($title, $description, $image, $content, $slug, $createdAt)"
				);
				query.run({
					$title: title.toString(),
					$description: description.toString(),
					$image: presignedFile,
					$content: content.toString(),
					$slug: slug,
					$createdAt: createdAt,
				});
				return Response.json({ message: "Post creado exitosamente" });
			},
		},
	},
});
