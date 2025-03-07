import { calendarStyling } from '@/lib/constants.ts';
import { Calendar } from '@/components/ui/calendar.tsx';
import { de } from 'date-fns/locale';
import {
  IconLeft,
  IconRight,
} from '@/components/appointments/CalendarButtons.tsx';
import * as React from 'react';
import { cn } from '@/lib/utils.ts';
import { useAvailableDates } from '@/services/AppointmentService.ts';
import { startOfDay, isSameDay } from 'date-fns';
import { CalendarSkeleton } from '@/components/appointments/CalendarSkeleton.tsx';

interface YuuniqCalendarProps extends React.ComponentProps<'div'> {
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
}

function YuuniqCalendar({
  className,
  date,
  setDate,
}: Readonly<YuuniqCalendarProps>) {
  const today = startOfDay(new Date());
  const { data: availableDates, isLoading } = useAvailableDates();

  const availableDateObjects =
    availableDates?.dates.map((dateStr) => new Date(dateStr)) ?? [];

  if (isLoading) {
    return <CalendarSkeleton className={className} />;
  }

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      locale={de}
      className={cn('w-full p-0', className)}
      classNames={calendarStyling}
      components={{
        IconLeft,
        IconRight,
      }}
      showOutsideDays={false}
      fromDate={today}
      disabled={(date) => {
        if (date < today) return true;

        return !availableDateObjects.some((availableDate) =>
          isSameDay(date, availableDate),
        );
      }}
    />
  );
}

export default YuuniqCalendar;
