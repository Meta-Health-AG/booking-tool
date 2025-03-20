import {
  AvailableAppointmentSlots,
  AvailableDates,
  BookingType,
} from '@/types.ts';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const appointmentService = {
  getAvailableDates: async (
    providerId: string | undefined,
    startDate: string,
    endDate: string,
    bookingType?: BookingType,
  ): Promise<AvailableDates> => {
    if (!providerId) {
      throw new Error('providerId is undefined');
    }

    try {
      const response = await axios.get<AvailableDates>(
        `${import.meta.env.VITE_BACKEND_URL}/bookings/providers/${providerId}/available-dates`,
        {
          params: {
            start_date: startDate,
            end_date: endDate,
            booking_type: bookingType,
          },
        },
      );
      console.log('response', response);
      return response.data;
    } catch (error) {
      console.error('Error fetching available dates:', error);
      return { dates: [] };
    }
  },

  getAvailableTimeslotsByDate: async (
    providerId: string,
    selectedDate: string,
    bookingType?: BookingType,
  ): Promise<AvailableAppointmentSlots> => {
    if (!providerId) {
      throw new Error('providerId is undefined');
    }

    try {
      const response = await axios.get<AvailableAppointmentSlots>(
        `${import.meta.env.VITE_BACKEND_URL}/bookings/providers/${providerId}/day-slots`,
        {
          params: {
            selected_date: selectedDate,
            booking_type: bookingType,
          },
        },
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching available timeslots:', error);
      throw error;
    }
  },
};

export const useAvailableDates = (
  providerId: string | undefined,
  startDate: string,
  endDate: string,
  bookingType?: BookingType,
) => {
  return useQuery({
    queryKey: [
      'appointments',
      'availableDates',
      providerId,
      startDate,
      endDate,
      bookingType,
    ],
    queryFn: () =>
      appointmentService.getAvailableDates(
        providerId,
        startDate,
        endDate,
        bookingType,
      ),
    enabled: !!providerId && !!startDate && !!endDate,
  });
};

export const useAvailableTimeslots = (
  providerId: string | undefined,
  selectedDate: string,
  bookingType?: BookingType,
) => {
  return useQuery({
    queryKey: [
      'appointments',
      'availableTimeslots',
      providerId,
      selectedDate,
      bookingType,
    ],
    queryFn: () =>
      appointmentService.getAvailableTimeslotsByDate(
        providerId!,
        selectedDate,
        bookingType,
      ),
    enabled: !!providerId && !!selectedDate,
  });
};
