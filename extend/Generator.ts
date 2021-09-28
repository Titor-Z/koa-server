import { stdin, stdout } from "process";
import { createInterface } from "readline";
import { Engine } from "./Engine";

/**
 * @class Generator <发电机>
 * @author Titor-Z <foolsecret@163.com>
 *
 * @description
 * 通过启动发电机,可自由的对Koa-Server项目进行接口调试.
 *
 * @template
 * 1. 首先运行 `yarn curl`
 * 2. 发送请求 `get::/a/b/c  post::/user  --data=a:1,b,2`
 *
 * @todo
 * 1. 启动ReadLine
 * 2. 等待用户输入结构
 * 3. 解析用户输入的内容
 * 4. 打印相应的内容
 */
class Generator {
  protected rl: any;

  //
  public constructor() {
    this.rl = createInterface({
      input: stdin,
      output: stdout,
      // prompt: "❤️ API Debugger Tools \n\n",
    });
    this.on();
  }

  // 启动
  private on() {
    this.rl.on("line", (line: any) => {
      if (line.length == 0) return false;
      new Engine(line);
    });
  }
}

export { Generator };
