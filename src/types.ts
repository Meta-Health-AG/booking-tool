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

export type BookingType = 'Yuuniq' | 'Medisyn';

export interface Location {
  id: string;
  name: string;
  address: string;
  city: string;
  zip: string;
  type: BookingType;
  latitude?: number;
  longitude?: number;
  opening_hours?: OpeningHoursWeekly;
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

export interface Address {
  street: string;
  city: string;
  zip_code: string;
  country: string;
}

export interface Insurance {
  ahv_number?: string;
  insurance_number?: string;
  insurance_card_number?: string;
  insurance_company_name?: string;
  insurance_company_ean?: string;
}

export interface BookingRequest {
  patientFirstName?: string;
  patientLastName?: string;
  patientEmail?: string;
  patientDateOfBirth?: string;
  patientGender?: 'M' | 'F' | 'N';
  patientAddress?: Address;
  patientInsurance?: Insurance;
  healthcareProviderId: string;
  auth0Id?: string;
  startDatetime: string;
  endDatetime: string;
  clusters: string[];
  type: BookingType;
}
