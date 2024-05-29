import { cookies } from "next/headers";
import { encrypt } from "@/app/lib/encrypt";
import { decrypt } from "@/app/lib/decrypt";

export const updateSession = async () => {
    const session = cookies().get('session')?.value;
    if (!session) return;


}