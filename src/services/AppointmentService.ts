import { AvailableAppointmentSlots, AvailableDates } from '@/types.ts';
import { useQuery } from '@tanstack/react-query';
import { mockAvailableAppointmentSlots } from '@/mock/MockAvailableAppointments.ts';
import axios from 'axios';

export const appointmentService = {
  getAvailableDates: async (
    providerId: string | undefined,
    startDate: string,
    endDate: string,
    bookingType?: 'Yuuniq' | 'Medisyn',
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
    date: string,
  ): Promise<AvailableAppointmentSlots> => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (!providerId) {
      console.log('providerId is undefined');
    }

    if (!date) {
      console.log('date is undefined');
    }

    return mockAvailableAppointmentSlots;
  },
};

export const useAvailableDates = (
  providerId: string | undefined,
  startDate: string,
  endDate: string,
  bookingType?: 'Yuuniq' | 'Medisyn',
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

export const useAvailableTimeslots = (providerId: string, date: string) => {
  return useQuery({
    queryKey: ['appointments', 'availableTimeslots', providerId, date],
    queryFn: () =>
      appointmentService.getAvailableTimeslotsByDate(providerId, date),
    enabled: !!providerId && !!date,
    staleTime: 0,
    gcTime: 0,
  });
};
