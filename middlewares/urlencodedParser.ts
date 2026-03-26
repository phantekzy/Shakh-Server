import { Middleware } from "../core/router";

const MAX_PAYLOAD_SIZE = 1048576;

export const urlencodedParser: Middleware = (req, res, next) => {
  if (req.headers["content-type"] !== "application/x-www-form-urlencoded") {
    return next();
  }
  let body = "";
  let byteCount = 0;

  req.on("data", (chunk: Buffer) => {
    byteCount += chunk.length;
  });
};
