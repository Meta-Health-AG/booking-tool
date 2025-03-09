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
import useStore from '@/state/state.ts';

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
  const { selectedLocation } = useStore();

  const { data: availableDates, isLoading } = useAvailableDates(
    selectedLocation?.id,
  );

  const availableDateObjects =
    availableDates?.dates.map((dateStr) => new Date(dateStr)) ?? [];

  const isDateAvailable = (dateToCheck: Date) => {
    if (dateToCheck < today) return false;
    return availableDateObjects.some((availableDate) =>
      isSameDay(dateToCheck, availableDate),
    );
  };

  React.useEffect(() => {
    if (availableDateObjects.length > 0) {
      // Sortiere die verfügbaren Daten chronologisch
      const sortedDates = [...availableDateObjects].sort(
        (a, b) => a.getTime() - b.getTime(),
      );

      // Wenn das aktuelle Datum nicht verfügbar ist oder kein Datum ausgewählt ist
      if (!date || !isDateAvailable(date)) {
        // Finde das erste verfügbare Datum
        const nextAvailableDate = sortedDates.find((date) =>
          isDateAvailable(date),
        );

        if (nextAvailableDate) {
          setDate(nextAvailableDate);
        }
      }
    }
  }, [availableDateObjects, date, setDate, today]);

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
      disabled={(date) => !isDateAvailable(date)}
    />
  );
}

export default YuuniqCalendar;
