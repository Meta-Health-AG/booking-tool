import * as React from 'react';
import { cn } from '@/utils/utils';
import { Skeleton } from '@/components/ui/skeleton';
import {
  CALENDAR_HEADER_SKELETON_ITEMS,
  CALENDAR_WEEK_SKELETON_ITEMS,
} from '@/utils/constants.ts';

export function CalendarSkeleton({ className }: React.ComponentProps<'div'>) {
  return (
    <div className={cn('w-full p-0', className)}>
      <div className="space-y-4">
        {/* Kalender Header */}
        <div className="flex justify-between relative items-center mb-5">
          <Skeleton className="h-6 w-32" />
          <div className="flex gap-1">
            <Skeleton className="h-7 w-7 rounded" />
            <Skeleton className="h-7 w-7 rounded" />
          </div>
        </div>

        {/* Weekdays */}
        <div className="flex w-full justify-between mb-1">
          {CALENDAR_HEADER_SKELETON_ITEMS.map((id) => (
            <Skeleton key={id} className="w-10 h-6" />
          ))}
        </div>

        {/* Calendar Days */}
        <div>
          {CALENDAR_WEEK_SKELETON_ITEMS.map((weekIndex) => (
            <div key={weekIndex} className="flex w-full justify-between mt-2">
              {[...Array(7)].map((_, dayIndex) => (
                <div
                  key={`day-${weekIndex}-${dayIndex}`}
                  className="flex items-center justify-center"
                >
                  <Skeleton className="h-10 w-10 rounded-full" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
