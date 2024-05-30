import { SignJWT } from "jose";

const key = new TextEncoder().encode(process.env.JWT_SECRET);

export const encrypt = async (payload: any) => {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("30 sec from now")
    .sign(key);
};