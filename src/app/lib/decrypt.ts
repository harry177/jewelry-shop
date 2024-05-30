import { jwtVerify } from "jose";

const key = new TextEncoder().encode(process.env.JWT_SECRET);

export const decrypt = async (session: string) => {
  if (session) {
    const { payload } = await jwtVerify(session, key, {
      algorithms: ["HS256"],
    });
    return payload;
  }
  return null;
};
