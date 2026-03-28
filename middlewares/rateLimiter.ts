import { Middleware } from "../core/router";

interface RateRecord {
  count: number;
  resetTime: number;
}

const store = new Map<string, RateRecord>();

export const rateLimiter = (limit: number, windowMs: number): Middleware => {
  return (req, res, next) => {
    const ip = req.socket.remoteAddress || "unknown";
    const now = Date.now();
    const record = store.get(ip);

    if (store.size > 10000) {
      for (const [key, val] of store.entries()) {
        if (now > val.resetTime) store.delete(key);
      }
    }
  };
};
