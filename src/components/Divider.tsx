import { ComponentProps } from 'react';
import { cn } from '@/lib/utils.ts';

interface DividerProps extends ComponentProps<'div'> {
  height?: number;
}

function Divider({ height = 1, className }: Readonly<DividerProps>) {
  return (
    <div
      style={{ height: `${height}px` }}
      className={cn('bg-black opacity-10 w-full', className)}
    />
  );
}

export default Divider;
