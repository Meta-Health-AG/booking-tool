import * as React from 'react';
import { clsx } from 'clsx';

export function H2({ className, children }: React.ComponentProps<'div'>) {
  return <p className={clsx('font-bold text-xl', className)}>{children}</p>;
}
