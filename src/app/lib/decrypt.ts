import { jwtVerify } from "jose";

const key = new TextEncoder().encode(process.env.JWT_SECRET);

export const decrypt = async (session: string) => {
  const { payload } = await jwtVerify(session, key, {
    algorithms: ["HS256"],
  });
  if (payload.exp) {
    console.log('jopa')
  }
  return payload;
};
