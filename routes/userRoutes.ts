import { getUser } from "../handlers/userHandler";
import { validate } from "../middlewares/validator";
import { Arc, jwtAuth } from "../src";

export const registerUserRoutes = (app: Arc) => {
  const idSchema = { id: "string" };

  app.router.get("/test/:id", getUser);

  app.router.get("/users/:id", jwtAuth, validate(idSchema, "params"), getUser);
};
