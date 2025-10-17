// visit-counter.ts
import { redis } from "bun";

console.info(`running visits counter on port 8080 -  CPU: ${process.env.cpu}`)
Bun.serve({
    routes: {
        '/': async (req) => {
            const visits = await redis.get("visits") ?? 0
            await redis.incr("visits");
            return new Response(`Visits: ${visits} \r\n CPU: ${process.env.cpu} \r\n`)       
        }
    },
    port: 8080,
    reusePort: true,
    development: false,
})
