"use server";

import bcrypt from "bcrypt";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { sql } from "@vercel/postgres";
import { encrypt } from "@/app/lib/encrypt";


interface LoginData {
  email: string;
  password: string;
}

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

    const expires = new Date(Date.now() + 30 * 1000);
    const session = await encrypt({ user, expires });

    cookies().set("session", session, {
      httpOnly: true,
      expires: expires,
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
