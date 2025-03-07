import * as React from 'react';
import { cn } from '@/lib/utils.ts';

export function H2({ className, children }: React.ComponentProps<'div'>) {
  return <p className={cn('font-bold text-xl', className)}>{children}</p>;
}

export function H2W600({ className, children }: React.ComponentProps<'div'>) {
  return <p className={cn('font-semibold text-xl', className)}>{children}</p>;
}

export function H3({ className, children }: React.ComponentProps<'div'>) {
  return <p className={cn('', className)}>{children}</p>;
}

export function LocationTitle({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'text-[#11181C] text-base font-semibold leading-7',
        className,
      )}
      {...props}
    />
  );
}

export function SmallText({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn('text-[#6B7280] text-sm leading-[14px]', className)}
      {...props}
    />
  );
}

export function OpeningTimeText({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'text-[#6B7280] text-sm leading-[18px] whitespace-pre-line',
        className,
      )}
      {...props}
    />
  );
}

export function Size12W400({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'text-[#707070] text-xs leading-[18px] whitespace-pre-line',
        className,
      )}
      {...props}
    />
  );
}

export function H14Semi({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn('text-[#11181C] text-sm font-semibold', className)}
      {...props}
    />
  );
}

export function H20Semi({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn('text-[#11181C] text-xl font-semibold', className)}
      {...props}
    />
  );
}
