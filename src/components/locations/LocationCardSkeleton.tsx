import { Skeleton } from '@/components/ui/skeleton';

export function LocationCardSkeleton() {
  return (
    <div className="p-4 bg-white border border-input rounded-xl flex gap-4">
      <Skeleton className="h-10 w-10 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-7 w-[200px]" />
        <Skeleton className="h-5 w-[250px]" />
        <Skeleton className="h-5 w-[180px]" />
      </div>
    </div>
  );
}
