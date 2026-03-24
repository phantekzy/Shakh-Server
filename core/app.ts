import http from "http";
import { Middleware, Router } from "./router";
import { ArcRequest } from "./request";
import { enhanceResponse } from "./response";

export class Arc {
  public router = new Router();
  private middlewares: Middleware[] = [];
  use(m: Middleware) {
    this.middlewares.push(m);
  }
  listen(port: number, cb: () => void) {
    http.createServer((req, res) => this.handle(req, res)).listen(port, cb);
  }
  private async handle(req: http.IncomingMessage, res: http.ServerResponse) {
    const arcReq = req as ArcRequest;
    const arcRes = enhanceResponse(res);
  }
}
