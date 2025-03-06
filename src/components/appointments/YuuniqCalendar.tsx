import { calendarStyling } from '@/lib/constants.ts';
import { Calendar } from '@/components/ui/calendar.tsx';
import { de } from 'date-fns/locale';
import {
  IconLeft,
  IconRight,
} from '@/components/appointments/CalendarButtons.tsx';
import * as React from 'react';
import { cn } from '@/lib/utils.ts';

interface YuuniqCalendarProps extends React.ComponentProps<'div'> {
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
}

function YuuniqCalendar({
  className,
  date,
  setDate,
}: Readonly<YuuniqCalendarProps>) {
  const today = new Date();

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      locale={de}
      className={cn('w-full', className)}
      classNames={calendarStyling}
      components={{
        IconLeft,
        IconRight,
      }}
      showOutsideDays={false}
      fromDate={today}
      disabled={(date) => {
        today.setHours(0, 0, 0, 0);
        return date < today;
      }}
    />
  );
}

export default YuuniqCalendar;
