import { OpeningHoursDaily, Location } from '@/types';

// Hilfsfunktion für häufig verwendete Zeiten
const createDailyHours = (start: number, end: number): OpeningHoursDaily[] => [
  {
    startHour: start,
    endHour: end,
  },
];

// Hilfsfunktion für Mittagspause
const createSplitHours = (): OpeningHoursDaily[] => [
  {
    startHour: 8,
    endHour: 12,
  },
  {
    startHour: 13,
    endHour: 17,
  },
];

export const mockLocationData: Location[] = [
  {
    name: 'Dr. med. Müller Praxis',
    address: 'Hauptstraße 1',
    city: 'Berlin',
    zip: '10115',
    type: 'doctor',
    latitude: 52.52,
    longitude: 13.405,
    opening_hours: {
      monday: createSplitHours(),
      tuesday: createSplitHours(),
      wednesday: createSplitHours(),
      thursday: createSplitHours(),
      friday: createDailyHours(8, 14),
      saturday: createDailyHours(9, 12),
      sunday: [],
    },
  },
  {
    name: 'Zentrallabor Berlin',
    address: 'Laborweg 42',
    city: 'Berlin',
    zip: '10117',
    type: 'lab',
    latitude: 52.51,
    longitude: 13.402,
    opening_hours: {
      monday: createDailyHours(7, 20),
      tuesday: createDailyHours(7, 20),
      wednesday: createDailyHours(7, 20),
      thursday: createDailyHours(7, 20),
      friday: createDailyHours(7, 18),
      saturday: createDailyHours(8, 13),
      sunday: [],
    },
  },
];
