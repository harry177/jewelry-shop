"use server";

import { NextRequest, NextResponse } from "next/server";
import { encrypt } from "@/app/lib/encrypt";
import { decrypt } from "@/app/lib/decrypt";

export const updateSession = async (request: NextRequest) => {
  
  const session = request.cookies.get("session")?.value;
  if (!session) return;

  const parsed = await decrypt(session);
  if (!parsed) return;

  const expires = parsed.exp;
  if ((expires as number) - new Date().getTime() < 10 * 1000) {
    const newExpires = new Date(Date.now() + 30 * 1000);
    const newSession = await encrypt({ user: parsed.user, expires: newExpires });
    const res = NextResponse.next();
    res.cookies.set({
      name: "session",
      value: newSession,
      httpOnly: true,
      expires: newExpires,
    });
    return res;
  }
};
