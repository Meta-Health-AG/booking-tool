import { AvailableAppointmentSlots, AvailableDates } from '@/types.ts';
import { mockAvailableDates } from '@/mock/MockAvailableDates.ts';
import { useQuery } from '@tanstack/react-query';
import { mockAvailableAppointmentSlots } from '@/mock/MockAvailableAppointments.ts';

export const appointmentService = {
  getAvailableDates: async (
    providerId: string | undefined,
  ): Promise<AvailableDates> => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (!providerId) {
      console.log('providerId is undefined');
    }

    return mockAvailableDates;
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

export const useAvailableDates = (providerId: string | undefined) => {
  return useQuery({
    queryKey: ['appointments', 'availableDates', providerId],
    queryFn: () => appointmentService.getAvailableDates(providerId ?? ''),
    enabled: !!providerId,
  });
};

export const useAvailableTimeslots = (providerId: string, date: string) => {
  return useQuery({
    queryKey: ['appointments', 'availableTimeslots', providerId, date],
    queryFn: () =>
      appointmentService.getAvailableTimeslotsByDate(providerId, date),
    enabled: !!providerId && !!date,
    staleTime: 0,
  });
};
