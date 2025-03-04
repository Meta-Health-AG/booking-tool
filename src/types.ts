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
