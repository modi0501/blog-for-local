import * as jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const encode = (payload: any) => {
  return jwt.sign(payload, process.env.TOKEN_KEY!, {
    subject: payload._id.toString(),
    expiresIn: "1 day",
    algorithm: "HS256",
  });
};
