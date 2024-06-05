import { serve, file, sleep, write } from "bun";

const server = serve({
  port: 3000,
  fetch(req) {
    return new Response(file("images/image.png"));
  },
});

console.log(`Listening on http://localhost:${server.port} ...`);

const image1 = file("images/image1.png");
const image2 = file("images/image2.png");

while (true) {
  for (const image of [image1, image2]) {
    await write("images/image.png", image);
    await sleep(2_000);
  }
}
