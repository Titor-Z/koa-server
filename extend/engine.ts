import { argv } from "process";
import got from "got";
import { Env } from "./env.util";

//  Template
//  node boot get::/a/b/c  post::/user  --data=a:1,b,2
export class Engine {
  method: string;
  url: string;
  host: string;

  // param: {};

  constructor() {
    [this.method, this.url] = argv.splice(2)[0].split("::");
    let env = new Env();
    this.host = `${env.get("host")}:${env.get("port")}`;
    this.on();
  }

  private async on() {
    switch (this.method) {
      default:
        console.log("程序异常");
        break;
      case "get":
        let http = await got(`${this.host}${this.url}`);
        console.table([
          {
            Method: this.method.toUpperCase(),
            URL: this.url,
            Content: http.body,
          },
        ]);
        break;
      case "post":
        console.log("POST", "<<<", this.url);
        break;
    }
  }

  _get() {}
}
