import router from "koa-router";
import { Context } from "koa";

class Route {
  route: router;
  constructor() {
    this.route = new router();
    this.assign();
  }

  assign() {
    this.route
      .get("/", (ctx: Context) => {
        ctx.type = "json";
        ctx.body = {
          code: 200,
          data: "Hello World!",
        };
      })
      .get("/User", (ctx: Context) => {
        ctx.type = "json";
        ctx.body = {
          code: 200,
          data: [
            { name: "Titor", age: 26, sex: 1 },
            { name: "Shary", age: 24, sex: 0 },
            { name: "John", age: 26, sex: 1 },
          ],
        };
      });
  }

  on() {
    return this.route.routes();
  }
}

export { Route };
