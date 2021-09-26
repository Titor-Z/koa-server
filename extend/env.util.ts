import { readFileSync } from "fs";
import { resolve, sep, join } from "path";

class Env {
  env: any = {};
  root: string = join(resolve(".")) + sep;

  public constructor() {
    this.init();
  }

  private init() {
    let file: string;
    try {
      file = readFileSync(`${this.root}.env`, "utf8");
    } catch (error) {
      throw new Error("发生错误了");
    }
    this.formatEnv(file.split("\n"));
  }

  private formatEnv(envOld: string[]) {
    for (let i = 0; i < envOld.length; i++) {
      let arr: string[] = envOld[i].split("=");
      this.env[arr[0].trim()] = arr[1].trim();
    }
    return this.env;
  }

  public get(config: string = "") {
    if (config) return this.env[config];
    return this.env;
  }
}

export { Env };
