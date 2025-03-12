import * as React from 'react';
import { cn } from '@/utils/utils.ts';

export function PageBody({ className, children }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'px-4 mb-2 lg:h-[calc(100vh-180px)] lg:overflow-hidden',
        className,
      )}
    >
      {children}
    </div>
  );
}
