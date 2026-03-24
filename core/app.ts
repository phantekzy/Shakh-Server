import http from "http";
import { Middleware, Router } from "./router";

export class Arc {
  public router = new Router();
  private middlewares: Middleware[] = [];
  use(m: Middleware) {
    this.middlewares.push(m);
  }
  listen(port: number, cb: () => void) {
    http.createServer((req, res) => this.handle(req, res)).listen(port, cb);
  }
}
