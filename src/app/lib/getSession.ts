import { cookies } from "next/headers";

export const getSession = async () => {
    const session = cookies().get('session')?.value;
    if (!session) return null;
    return session;
}