import { Middleware } from "../core/router";

export const cookieParser: Middleware = (req, res, next) => {
  const cookieHeader = req.headers.cookie;
  req.cookies = {};
};
