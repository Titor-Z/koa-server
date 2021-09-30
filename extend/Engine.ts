import got from "got";
import { Env } from "./Env"; // 工程配置工具库

/**
 * @class Engine <解析引擎>
 * @author Titor-Z <foolsecret@163.com>
 *
 * @template
 * 1. 首先运行 `yarn curl`
 * 2. 发送请求 `get::/a/b/c  post::/user  --data=a:1,b,2`
 *
 * @var env: 工程配置项
 * @var method <string | null> [get,post,put,delete] 请求方式
 * @var url <string | null>: 请求地址
 * @var host <string>: 主机名
 */
export class Engine {
  env: { host: string; port: number }; // 工程配置项
  method: string | null = null;
  url: string = "/";
  host: string;

  // param: {};

  /**
   * @constructor
   * @augments
   * - rlInput <string | null> : 命令行输入的内容
   */
  public constructor(rlInput: string | null) {
    this.env = new Env().get();
    this.host = `${this.env["host"]}:${this.env["port"]}`;

    this.init(rlInput);
  }

  /**
   * @name 初始化
   * @augments
   * rlInput <string | null> : 命令行输入的内容
   * @description
   * 解析输入内容,匹配对应的操作项
   */
  private init(rlInput: string | null) {
    if (rlInput == null) return false;
    [this.method, this.url] = rlInput.split("::");
    if (this.url == undefined || this.url == null || this.url == "")
      this.url = "/";

    this.on();
  }

  /**
   * @name 启动
   * @description
   * 通过解析的内容,执行对应的数据请求,打印响应的内容
   */
  private async on() {
    switch (this.method) {
      default:
        console.log("暂不支持该操作");
        break;
      case "get":
        let http = await got(`${this.host}${this.url}`);
        console.table([
          {
            Method: this.method.toUpperCase(),
            URL: this.url,
            Content: JSON.parse(http.body),
          },
        ]);
        break;
      case "post":
        console.log("POST", "<<<", this.url);
        break;
    }
  }
}
