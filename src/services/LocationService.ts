import { Location } from '@/types.ts';
import { mockLocationData } from '@/mock/MockLocationData.ts';
import { useQuery } from '@tanstack/react-query';

export const locationService = {
  findLocationsByCity: async (city: string): Promise<Location[]> => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    return mockLocationData.filter(
      (location) => location.city.toLowerCase() === city.toLowerCase(),
    );
  },

  findLocationsByType: async (type: 'doctor' | 'lab'): Promise<Location[]> => {
    await new Promise((resolve) => setTimeout(resolve, 500));

    return mockLocationData.filter((location) => location.type === type);
  },

  findAllLocations: async (): Promise<Location[]> => {
    await new Promise((resolve) => setTimeout(resolve, 500));

    return mockLocationData;
  },
};

// React Query Hooks
export const useLocationsByCity = (city: string) => {
  return useQuery({
    queryKey: ['locations', 'byCity', city],
    queryFn: () => locationService.findLocationsByCity(city),
  });
};

export const useLocationsByType = (type: 'doctor' | 'lab') => {
  return useQuery({
    queryKey: ['locations', 'byType', type],
    queryFn: () => locationService.findLocationsByType(type),
  });
};

export const useAllLocations = () => {
  return useQuery({
    queryKey: ['locations', 'all'],
    queryFn: () => locationService.findAllLocations(),
  });
};
