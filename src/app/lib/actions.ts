"use server";

import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import { sql } from "@vercel/postgres";
import { redirect } from 'next/navigation'

interface SignUpData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const register = async (formData: SignUpData) => {

  const { username, email, password, confirmPassword } = formData;

  const hashedPassword = await bcrypt.hash(password, 10);
  const id = uuidv4();

  try {
    const { rows } = await sql`
      SELECT EXISTS (
        SELECT 1 FROM information_schema.tables
        WHERE table_name = 'users'
      ) AS table_exists;
    `;

    if (!rows[0].table_exists) {
      await sql`
        CREATE TABLE users (
          id UUID PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          email VARCHAR(255) UNIQUE NOT NULL,
          password VARCHAR(255) NOT NULL
        );
      `;
    }

    await sql`
      INSERT INTO users (id, name, email, password)
      VALUES (${id}, ${username}, ${email}, ${hashedPassword})
    `;
  } catch (error) {
    console.log(error)
    return "Database Error: Failed to Create Account.";
  }

  redirect("/signin");
};
