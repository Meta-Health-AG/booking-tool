import { BookingRequest } from '@/types.ts';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export const bookingService = {
  createBooking: async (bookingData: Omit<BookingRequest, 'new_patient'>) => {
    try {
      const requestData: BookingRequest & { new_patient: boolean } = {
        ...bookingData,
        new_patient: !bookingData.auth0Id,
        patientAddress: bookingData.patientAddress
          ? { ...bookingData.patientAddress, country: 'Schweiz' }
          : undefined,
      };

      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/bookings`,
        requestData,
      );

      return response.data;
    } catch (error) {
      console.error('Error creating booking:', error);
      throw error;
    }
  },
};

export const useCreateBooking = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (bookingData: Omit<BookingRequest, 'new_patient'>) =>
      bookingService.createBooking(bookingData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['appointments'] }).then();
    },
  });
};
