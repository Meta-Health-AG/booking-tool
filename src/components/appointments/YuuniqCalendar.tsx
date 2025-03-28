import { calendarStyling } from '@/utils/constants.ts';
import { Calendar } from '@/components/ui/calendar.tsx';
import { de } from 'date-fns/locale';
import {
  IconLeft,
  IconRight,
} from '@/components/appointments/CalendarButtons.tsx';
import { cn } from '@/utils/utils.ts';
import { useAvailableDates } from '@/services/AppointmentService.ts';
import { CalendarSkeleton } from '@/components/appointments/CalendarSkeleton.tsx';
import useStore from '@/state/state.ts';
import { ComponentProps, useEffect, useState } from 'react';
import {
  startOfDay,
  isSameDay,
  endOfMonth,
  startOfMonth,
  isThisMonth,
} from 'date-fns';

interface YuuniqCalendarProps extends ComponentProps<'div'> {
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
}

function YuuniqCalendar({
  className,
  date,
  setDate,
}: Readonly<YuuniqCalendarProps>) {
  const { selectedLocation } = useStore();
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [isMonthChanging, setIsMonthChanging] = useState(false);

  const today = startOfDay(new Date());
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);

  const startDate = isThisMonth(currentMonth)
    ? today.toISOString().split('T')[0]
    : monthStart.toISOString().split('T')[0];

  const endDateStr = monthEnd.toISOString().split('T')[0];

  const { data: availableDates, isLoading } = useAvailableDates(
    selectedLocation?.id,
    startDate,
    endDateStr,
    selectedLocation?.type,
  );

  const availableDateObjects =
    availableDates?.dates.map((dateStr) => new Date(dateStr)) ?? [];

  const isDateAvailable = (dateToCheck: Date) => {
    if (dateToCheck < today) return false;
    return availableDateObjects.some((availableDate) =>
      isSameDay(dateToCheck, availableDate),
    );
  };

  useEffect(() => {
    if (availableDateObjects.length > 0 && !isMonthChanging) {
      const sortedDates = [...availableDateObjects].sort(
        (a, b) => a.getTime() - b.getTime(),
      );

      if (!date || !isDateAvailable(date)) {
        const nextAvailableDate = sortedDates.find(
          (d) => isDateAvailable(d) && d.getMonth() === currentMonth.getMonth(),
        );

        if (nextAvailableDate) {
          setDate(nextAvailableDate);
        }
      }
    }
  }, [
    availableDateObjects,
    date,
    setDate,
    today,
    currentMonth,
    isMonthChanging,
  ]);

  const handleMonthChange = async (newMonth: Date) => {
    setIsMonthChanging(true);

    setDate(undefined);

    setCurrentMonth(newMonth);

    await new Promise((resolve) => setTimeout(resolve, 100));

    setIsMonthChanging(false);
  };

  if (isLoading || isMonthChanging) {
    return <CalendarSkeleton className={className} />;
  }

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
      onMonthChange={handleMonthChange}
      month={currentMonth}
    />
  );
}

export default YuuniqCalendar;
