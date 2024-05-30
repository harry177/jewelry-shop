import { NextRequest } from "next/server";
import { updateSession } from "@/app/lib/updateSession";

export async function middleware(request: NextRequest) {
  return await updateSession(request);
};
