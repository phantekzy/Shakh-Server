import { HttpError } from "../core/error";
import { Middleware } from "../core/router";

export const jwtAuth: Middleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return next(new HttpError(401, "Unauthorized"));
};
