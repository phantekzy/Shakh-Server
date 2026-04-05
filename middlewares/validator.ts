import { Middleware } from "../src";

export const validate = (schema: Record<string, string>): Middleware => {
  return (req, res, next) => {
    const body = req.body;

    if (!body || typeof body !== "object") {
      return res.status(400).json({
        error: "Validation Failed",
        message: "JSON body is required.",
      });
    }
  };
};
