import { create } from 'zustand';

export interface BookingSuccessResponse {
  booking_id: string;
  firstname: string;
  email: string;
  ics: string;
}

interface SuccessState {
  bookingResponse: BookingSuccessResponse | null;
  setBookingResponse: (response: BookingSuccessResponse) => void;
  clearBookingResponse: () => void;
}

export const useSuccessStore = create<SuccessState>((set) => ({
  bookingResponse: null,
  setBookingResponse: (response) => set({ bookingResponse: response }),
  clearBookingResponse: () => set({ bookingResponse: null }),
}));
