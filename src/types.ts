import { AppState } from '@/state/state.ts';

export interface ClassNameProp {
  className?: string;
}

export interface OnClickHandlerProp {
  onClick?: () => void;
}

export interface IsVisibleProp {
  isVisible?: boolean;
}

export interface ClusterResponse {
  cluster_id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  markers: string[];
}

type LocationType = 'doctor' | 'lab';

export interface Location {
  id: string;
  name: string;
  address: string;
  city: string;
  zip: string;
  type: LocationType;
  latitude?: number;
  longitude?: number;
  opening_hours: OpeningHoursWeekly;
}

export interface OpeningHoursDaily {
  startHour?: number;
  endHour?: number;
}

export interface OpeningHoursWeekly {
  monday: OpeningHoursDaily[];
  tuesday: OpeningHoursDaily[];
  wednesday: OpeningHoursDaily[];
  thursday: OpeningHoursDaily[];
  friday: OpeningHoursDaily[];
  saturday: OpeningHoursDaily[];
  sunday: OpeningHoursDaily[];
}

export interface AvailableDates {
  dates: string[];
}

export interface AvailableAppointmentSlots {
  date: string;
  available_slots: AppointmentSlot[];
}

export interface AppointmentSlot {
  start_time: string;
  end_time: string;
  is_available: boolean;
}

export interface PersonalInformation {
  vorname: string;
  nachname: string;
  email: string;
  geburtsdatum: Date;
  geschlecht: 'maennlich' | 'weiblich' | 'divers';
  strasse: string;
  plz: string;
  stadt: string;
  ahvNummer: string;
}

export type RouteConfigType = {
  [key: string]: {
    buttonText: string;
    nextRoute: string;
    isDisabled: (state: AppState) => boolean;
  } | null;
};
