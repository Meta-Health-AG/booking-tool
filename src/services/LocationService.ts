import { Location } from '@/types.ts';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fuzzyMatch = (str: string, search: string): boolean => {
  const searchLower = search.toLowerCase();
  const strLower = str.toLowerCase();
  return strLower.includes(searchLower);
};

export const locationService = {
  searchLocations: (
    searchTerm: string,
    allLocations: Location[],
  ): Location[] => {
    if (!searchTerm) return [];

    return allLocations.filter(
      (location) =>
        fuzzyMatch(location.city, searchTerm) ||
        fuzzyMatch(location.name, searchTerm),
    );
  },
  findAllLocations: async (): Promise<Location[]> => {
    const response = await axios.get<Location[]>(
      `${import.meta.env.VITE_BACKEND_URL}/healthcare_providers`,
    );
    return response.data;
  },
};

export const useSearchLocations = (
  searchTerm: string,
  allLocations: Location[],
) => {
  return useQuery({
    queryKey: ['locations', 'search', searchTerm],
    queryFn: () => locationService.searchLocations(searchTerm, allLocations),
    enabled: searchTerm.length > 0,
  });
};

export const useAllLocations = () => {
  return useQuery({
    queryKey: ['locations', 'all'],
    queryFn: () => locationService.findAllLocations(),
  });
};
