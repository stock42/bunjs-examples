# bunjs examples

All this examples are using bunjs

Created by [César Casas](https://www.linkedin.com/in/cesarcasas/)

To install dependencies:

```bash
bun install
```

# Examples list

- [visit-counter](#visit-counter)
- [blog](#blog)

## visit-counter

This example shows how to create a visit counter using bunjs, using cluster.
For run this example, you need to have bunjs and redis installed.

To run:

```bash
bun src/visit-counter/visit-counter-cluster.ts
```

To test (you need to have autocannon installed):

```bash
./src/visit-counter/test.sh
```

## blog

This example shows how to create a blog using bunjs, using sqlite and s3.
For run this example, you need to have bunjs and redis installed.

For run this example, you need to have a S3 bucket.
Remember add the follow environment variables before run the example (you can add them to your .env file):

```bash
export AWS_BUCKET=your-bucket-name
export AWS_REGION=your-bucket-region
export AWS_SECRET_ACCESS_KEY=your-bucket-secret-access-key
export AWS_ACCESS_KEY_ID=your-bucket-access-key-id
```

To run:

```bash
bun src/blog/index.ts
```

now, open the browser and go to http://localhost:8080
