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

    const errors: string[] = [];
    for (const [key, expectedType] of Object.entries(schema)) {
      if (!(key in body)) {
        errors.push(`Field '${key}' is missing`);
      } else if (typeof body[key] !== expectedType) {
        errors.push(
          `Field '${key}' expected ${expectedType}, got ${typeof body[key]}`,
        );
      }
    }
  };
};
