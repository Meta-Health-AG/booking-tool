import { BookingRequest } from '@/types.ts';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import {
  BookingSuccessResponse,
  useSuccessStore,
} from '@/state/success-state.ts';

export const bookingService = {
  createBooking: async (
    bookingData: Omit<BookingRequest, 'new_patient'>,
  ): Promise<BookingSuccessResponse> => {
    try {
      const requestData: BookingRequest & { new_patient: boolean } = {
        ...bookingData,
        new_patient: !bookingData.auth0Id,
        patientAddress: bookingData.patientAddress
          ? { ...bookingData.patientAddress, country: 'Schweiz' }
          : undefined,
      };

      const { data } = await axios.post<BookingSuccessResponse>(
        `${import.meta.env.VITE_BACKEND_URL}/bookings`,
        requestData,
      );

      return data;
    } catch (error) {
      console.error('Error creating booking:', error);
      throw error;
    }
  },
};

export const useCreateBooking = () => {
  const queryClient = useQueryClient();
  const setBookingResponse = useSuccessStore(
    (state) => state.setBookingResponse,
  );

  return useMutation<
    BookingSuccessResponse,
    Error,
    Omit<BookingRequest, 'new_patient'>
  >({
    mutationFn: bookingService.createBooking,
    onSuccess: (response) => {
      queryClient.invalidateQueries({ queryKey: ['appointments'] }).then();
      setBookingResponse(response);
    },
  });
};
