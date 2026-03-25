import { Middleware } from "../core/router";

export const logger: Middleware = (req, res, next) => {
  console.log(`[${new Date().toLocaleTimeString()}] ${req.method} ${req.url}`);
  next();
};
