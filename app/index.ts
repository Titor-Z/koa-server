import Application from "koa";
import { Env } from "../extend/env.util";

const server = new Application();

server.use(async (ctx) => {
  ctx.body = "Hello World!";
});

server.listen(new Env().get('port'), () => {
  console.log("server is running...");
});