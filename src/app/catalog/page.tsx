import { CatalogCore } from "@/components/pages/catalog/CatalogCore/CatalogCore";
import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";
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
        <CatalogCore data={rows} />
      </Suspense>
    </>
  );
}
