import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { getSession } from "@/app/lib/getSession";
import "./globals.css";
import { decrypt } from "./lib/decrypt";
import { JWTPayload } from "jose";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

interface UserDataProps extends JWTPayload {
  user: {
    id: string;
    name: string;
    email: string;
    password: string;
  },
  expires: string;
  iat: number;
  exp: number;
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getSession();
  const log = session && await decrypt(session) as UserDataProps;
  const userName = log && log.user.name;
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header user={userName} />
        <main className="flex flex-1 flex-col w-[93%] max-w-[1340px] m-auto">{children}</main>
        <Footer /> 
      </body>
    </html>
  );
}
