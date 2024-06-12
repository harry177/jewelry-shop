import { sql } from "@vercel/postgres";

export default async function Product({ params }: { params: { slug: string } }) {
  const { rows } = await sql`
  SELECT *
  FROM products
  WHERE name = ${params.slug.charAt(0).toUpperCase() + params.slug.slice(1).split('-').join(' ')}
`;
  return <>{JSON.stringify(rows)}</>;
}
