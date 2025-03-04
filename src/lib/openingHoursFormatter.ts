import { OpeningHoursDaily, OpeningHoursWeekly } from '@/types.ts';

const DAYS_DE = {
  monday: 'Mo',
  tuesday: 'Di',
  wednesday: 'Mi',
  thursday: 'Do',
  friday: 'Fr',
  saturday: 'Sa',
  sunday: 'So',
} as const;

type WeekDay = keyof typeof DAYS_DE;

const formatTimeRange = (hours: OpeningHoursDaily): string => {
  return `${hours.startHour}-${hours.endHour}`;
};

const formatDaySequence = (days: WeekDay[]): string => {
  const weekDayOrder = Object.keys(DAYS_DE) as WeekDay[];

  const sortedDays = [...days].sort(
    (a, b) => weekDayOrder.indexOf(a) - weekDayOrder.indexOf(b),
  );
  let result = '';
  let startDay = sortedDays[0];
  let prevDay = sortedDays[0];

  for (let i = 1; i <= sortedDays.length; i++) {
    const currentDay = sortedDays[i];
    const prevDayIndex = weekDayOrder.indexOf(prevDay);
    const currentDayIndex = weekDayOrder.indexOf(currentDay);

    if (i === sortedDays.length || currentDayIndex - prevDayIndex > 1) {
      // Sequenz ist zuende
      if (DAYS_DE[startDay] === DAYS_DE[prevDay]) {
        result += (result ? ', ' : '') + DAYS_DE[startDay];
      } else {
        result +=
          (result ? ', ' : '') + DAYS_DE[startDay] + '-' + DAYS_DE[prevDay];
      }
      startDay = currentDay;
    }
    prevDay = currentDay;
  }

  return result;
};

export const formatOpeningHours = (
  openingHours: OpeningHoursWeekly,
): string => {
  const timeGroups = new Map<string, WeekDay[]>();

  Object.entries(openingHours).forEach(([day, hours]) => {
    if (hours.length === 0) return;
    const timeKey = hours.map(formatTimeRange).join(', ');

    if (!timeGroups.has(timeKey)) {
      timeGroups.set(timeKey, [day as WeekDay]);
    } else {
      timeGroups.get(timeKey)?.push(day as WeekDay);
    }
  });

  return Array.from(timeGroups)
    .map(([timeRanges, days]) => {
      const formattedDays = formatDaySequence(days);
      const times = timeRanges
        .split(', ')
        .map((time) => `${time} Uhr`)
        .join(', ');

      return `${formattedDays} ${times}`;
    })
    .join('\n');
};
