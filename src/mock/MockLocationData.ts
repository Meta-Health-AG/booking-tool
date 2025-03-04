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
    address: 'Bahnhofstrasse 21',
    city: 'Zürich',
    zip: '8001',
    type: 'doctor',
    latitude: 47.3769,
    longitude: 8.5417,
    opening_hours: {
      monday: createSplitHours(),
      tuesday: createSplitHours(),
      wednesday: createSplitHours(),
      thursday: createSplitHours(),
      friday: createDailyHours(8, 14),
      saturday: createDailyHours(9, 12),
      sunday: [], // Geschlossen
    },
  },
  {
    name: 'Medisyn',
    address: 'Technikumstrasse 9',
    city: 'Winterthur',
    zip: '8400',
    type: 'lab',
    latitude: 47.4984,
    longitude: 8.7298,
    opening_hours: {
      monday: createDailyHours(7, 20),
      tuesday: createDailyHours(7, 20),
      wednesday: createDailyHours(7, 20),
      thursday: createDailyHours(7, 20),
      friday: createDailyHours(7, 18),
      saturday: createDailyHours(8, 13),
      sunday: [], // Geschlossen
    },
  },
];
