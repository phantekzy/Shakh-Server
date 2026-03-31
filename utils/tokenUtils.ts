import { Secret } from "jsonwebtoken";

const getSecret = (): Secret => {
  const secret = process.env.JWT_SECRET;
};
