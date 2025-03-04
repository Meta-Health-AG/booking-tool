import { Location } from '@/types.ts';
import { mockLocationData } from '@/mock/MockLocationData.ts';
import { useQuery } from '@tanstack/react-query';

const fuzzyMatch = (str: string, search: string): boolean => {
  const searchLower = search.toLowerCase();
  const strLower = str.toLowerCase();
  return strLower.includes(searchLower);
};

export const locationService = {
  searchLocations: async (searchTerm: string): Promise<Location[]> => {
    await new Promise((resolve) => setTimeout(resolve, 500));

    if (!searchTerm) return mockLocationData;

    return mockLocationData.filter(
      (location) =>
        fuzzyMatch(location.city, searchTerm) ||
        fuzzyMatch(location.name, searchTerm),
    );
  },
  findAllLocations: async (): Promise<Location[]> => {
    await new Promise((resolve) => setTimeout(resolve, 500));

    return mockLocationData;
  },
};

export const useSearchLocations = (searchTerm: string) => {
  return useQuery({
    queryKey: ['locations', 'search', searchTerm],
    queryFn: () => locationService.searchLocations(searchTerm),
    enabled: searchTerm.length > 0,
  });
};
export const useAllLocations = () => {
  return useQuery({
    queryKey: ['locations', 'all'],
    queryFn: () => locationService.findAllLocations(),
  });
};
