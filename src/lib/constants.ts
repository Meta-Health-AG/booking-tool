import { cn } from '@/lib/utils.ts';

export const SKELETON_ITEMS = [
  'skeleton-1',
  'skeleton-2',
  'skeleton-3',
] as const;

export const defaultMapCenter = { lat: 46.8182, lng: 8.2275 };

export const defaultMapZoom = 7;

export const locationMapZoom = 13;

export const mapRestrictions = {
  latLngBounds: {
    north: 47.8084,
    south: 45.8179,
    west: 5.9559,
    east: 10.4922,
  },
};

export const calendarStyling = {
  months:
    'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 w-full',
  month: 'space-y-4 w-full',
  table: 'w-full border-collapse',
  head_row: 'flex w-full justify-between mb-1',
  head_cell: 'w-full text-center font-semibold text-sm',
  row: 'flex w-full justify-between mt-2',
  cell: 'w-full flex items-center justify-center',
  day: 'h-10 w-10 p-0 font-normal text-sm rounded-full aria-selected:opacity-100 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground aria-selected:bg-primary aria-selected:text-white',
  caption: 'flex justify-between relative items-center mb-5',
  caption_label: 'text-base font-semibold',
  nav: 'space-x-1 flex items-center ml-auto',
  nav_button: cn(
    'hover:bg-transparent hover:opacity-100 h-7 w-7 p-0 hover:opacity-100',
  ),
  nav_button_previous: '!relative !left-0',
  nav_button_next: '!relative !right-0',
};
