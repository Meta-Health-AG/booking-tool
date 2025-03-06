import * as React from 'react';
import { cn } from '@/lib/utils.ts';

export function PageBody({ className, children }: React.ComponentProps<'div'>) {
  return <div className={cn('px-4 mb-2', className)}>{children}</div>;
}
