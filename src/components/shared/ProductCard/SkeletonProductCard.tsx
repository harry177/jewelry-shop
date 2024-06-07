import { Skeleton } from "@/components/ui/GeneralSkeleton";

export const SkeletonProductCard = () => {
  return (
    <div className="flex flex-col items-center w-[332px] gap-5 p-6 rounded-[30px] shadow-md">
      <Skeleton className="w-[220px] h-[220px]" />
      <Skeleton className="w-[220px] h-4" />
      <div className="flex justify-between w-[250px]">
        <Skeleton className="w-[40%] h-10" />
        <Skeleton className="w-[40%] h-10" />
      </div>
    </div>
  );
};
