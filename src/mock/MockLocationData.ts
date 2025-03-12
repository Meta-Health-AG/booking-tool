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
    id: 'loc1',
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
    id: 'loc2',
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
  {
    id: 'loc3',
    name: 'Gesundheitszentrum Bellevue',
    address: 'Bellevueplatz 5',
    city: 'Zürich',
    zip: '8008',
    type: 'doctor',
    latitude: 47.3666,
    longitude: 8.5452,
    opening_hours: {
      monday: createDailyHours(8, 18),
      tuesday: createDailyHours(8, 18),
      wednesday: createDailyHours(8, 18),
      thursday: createDailyHours(8, 18),
      friday: createDailyHours(8, 17),
      saturday: createDailyHours(9, 13),
      sunday: [], // Geschlossen
    },
  },
  {
    id: 'loc4',
    name: 'Labor Plus',
    address: 'Hauptstrasse 42',
    city: 'Baden',
    zip: '5400',
    type: 'lab',
    latitude: 47.4733,
    longitude: 8.3084,
    opening_hours: {
      monday: createDailyHours(7, 19),
      tuesday: createDailyHours(7, 19),
      wednesday: createDailyHours(7, 19),
      thursday: createDailyHours(7, 19),
      friday: createDailyHours(7, 17),
      saturday: createDailyHours(8, 12),
      sunday: [], // Geschlossen
    },
  },
  {
    id: 'loc5',
    name: 'Praxis Dr. Schmidt',
    address: 'Bahnhofplatz 3',
    city: 'Uster',
    zip: '8610',
    type: 'doctor',
    latitude: 47.3516,
    longitude: 8.7184,
    opening_hours: {
      monday: createSplitHours(),
      tuesday: createSplitHours(),
      wednesday: createSplitHours(),
      thursday: createSplitHours(),
      friday: createDailyHours(8, 16),
      saturday: createDailyHours(9, 11),
      sunday: [], // Geschlossen
    },
  },
];
