import { SkeletonProductCard } from "@/components/shared/ProductCard/SkeletonProductCard";

export default function CatalogLoading() {
  return (
    <div className="relative flex flex-wrap gap-y-5 mb-48">
      {"abcdefgh".split("").map((item, index) => (
        <SkeletonProductCard key={index} />
      ))}
    </div>
  );
}
