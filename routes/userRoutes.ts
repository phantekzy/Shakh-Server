import { getUser } from "../handlers/userHandler";
import { Arc } from "../src";

export const registerUserRoutes = (app: Arc) => {
  app.router.get("/test/:id", getUser);
};
