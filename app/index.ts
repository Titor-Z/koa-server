import Application from "koa";
import { Env } from "../extend/Env";
import { Route } from "./router/route";

class App {
  private server: Application;
  private env: Env;

  constructor() {
    this.server = new Application();
    this.env = new Env();

    this.use();
    this.start();
  }

  private use() {
    this.server.use(new Route().on());
  }

  private start() {
    this.server.listen(this.env.get("port"), () => {
      console.log(
        `server is running on the port of the ${this.env.get("port")}...`
      );
    });
  }
}

new App();
