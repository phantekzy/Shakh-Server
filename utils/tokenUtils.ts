import jwt, { Secret, SignOptions } from "jsonwebtoken";

const getSecret = (): Secret => {
  const secret = process.env.JWT_SECRET;
  if (!secret || secret.length < 32) {
    console.error("JWT_SECRET is missing or too weak (min 32 chars).");
    console.error("Server execution halted for security compliance.");
    process.exit(1);
  }
  return secret;
};

const FINAL_SECRET = getSecret();

export class TokenUtils {
  static signToken(
    payload: object,
    expiresIn: SignOptions["expiresIn"] = "1h",
  ): string {
    return jwt.sign(payload, FINAL_SECRET, {
      expiresIn,
      algorithm: "HS256",
    });
  }
}
