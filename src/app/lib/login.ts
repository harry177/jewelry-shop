"use server";

import bcrypt from "bcrypt";
import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

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
      return NextResponse.json({ error: "Invalid email" }, { status: 401 });
    }

    const user = rows[0];

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return { error: "Invalid password", status: 401 };
    }
    return NextResponse.json(user);
  } catch (error) {
    
    console.error(error);
    return NextResponse.json({ error: "An error occurred during login" }, { status: 500 });
  }
};
