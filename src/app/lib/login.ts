"use server";

import bcrypt from "bcrypt";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { sql } from "@vercel/postgres";
import { redirect } from "next/navigation";

interface LoginData {
  email: string;
  password: string;
}

const key = new TextEncoder().encode(process.env.JWT_SECRET);

export const encrypt = async (payload: any) => {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("10 sec from now")
    .sign(key);
};

export const login = async (formData: LoginData) => {
  const { email, password } = formData;

  try {
    const { rows } = await sql`
          SELECT * FROM users WHERE email = ${email}
        `;

    if (rows.length === 0) {
      return { error: "Invalid email", status: 401 };
    }

    const user = rows[0];

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return { error: "Invalid password", status: 401 };
    }

    const expires = new Date(Date.now() + 10 * 1000);
    const session = await encrypt({ user, expires });

    cookies().set("session", session, {
      httpOnly: true,
    });

    return user;
    
  } catch (error) {
    console.error(error);
    return { error: "An error occurred during login", status: 500 };
  }
};

export const redirectHome = async () => {
  redirect('/');
}
