import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";
import Image from "next/image";
import { Suspense, lazy } from "react";
const Loading = lazy(() => import("./loading"));

export default async function Catalog() {
  noStore();
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const { rows } = await sql`SELECT * FROM products`;

  
  return (
    <>
      <span>Catalog</span>
      <Suspense fallback={<Loading />}>
        <div className="flex gap-10">
          {rows.map((row: any) => (
            <div key={row.id}>
              <Image alt="image" src={row.image} width={300} height={300} />
              <span>{row.name}</span>
            </div>
          ))}
        </div>
      </Suspense>
    </>
  );
}
