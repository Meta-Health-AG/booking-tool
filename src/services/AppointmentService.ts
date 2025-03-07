import { AvailableDates } from '@/types.ts';
import { mockAvailableDates } from '@/mock/MockAvailableDates.ts';
import { useQuery } from '@tanstack/react-query';

export const appointmentService = {
  getAvailableDates: async (): Promise<AvailableDates> => {
    await new Promise((resolve) => setTimeout(resolve, 3000));

    return mockAvailableDates;
  },
};

export const useAvailableDates = () => {
  return useQuery({
    queryKey: ['appointments', 'availableDates'],
    queryFn: () => appointmentService.getAvailableDates(),
  });
};
