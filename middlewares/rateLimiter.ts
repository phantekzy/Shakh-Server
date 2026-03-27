import { Middleware } from "../core/router";

interface RateRecord {
  count: number;
  resetTime: number;
}

const store = new Map<string, RateRecord>();

export const rateLimiter = (limit: number, windowMs: number): Middleware => {};
