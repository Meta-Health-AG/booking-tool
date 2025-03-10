import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import {
  AppointmentSlot,
  ClusterResponse,
  Location,
  PersonalInformation,
} from '@/types.ts';

export interface AppState {
  QuerySKUs: string[];
  setQuerySKUs: (skus: string[]) => void;
  clearQuerySKUs: () => void;
  Clusters: ClusterResponse[];
  setClusters: (clusters: ClusterResponse[]) => void;
  clearClusters: () => void;
  selectedLocation: Location | null;
  setSelectedLocation: (location: Location | null) => void;
  filteredLocations: Location[] | null;
  setFilteredLocations: (locations: Location[] | null) => void;
  selectedAppointmentSlot: AppointmentSlot | null;
  setSelectedAppointmentSlot: (slot: AppointmentSlot | null) => void;
  personalInformation: PersonalInformation | null;
  setPersonalInformation: (info: PersonalInformation) => void;
  auth0id: string | null;
  setAuth0id: (id: string | null) => void;
  clearSelectedLocation: () => void;
  clearFilteredLocations: () => void;
  clearSelectedAppointmentSlot: () => void;
  clearPersonalInformation: () => void;
  clearAuth0id: () => void;
  resetAll: () => void;
}

const useStore = create<AppState>()(
  persist(
    (set) => ({
      QuerySKUs: [],
      setQuerySKUs: (skus) => set({ QuerySKUs: skus }),
      clearQuerySKUs: () => set({ QuerySKUs: [] }),
      Clusters: [],
      setClusters: (clusters) => set({ Clusters: clusters }),
      clearClusters: () => set({ Clusters: [] }),
      selectedLocation: null,
      setSelectedLocation: (location) => set({ selectedLocation: location }),
      filteredLocations: null,
      setFilteredLocations: (locations) =>
        set({ filteredLocations: locations }),
      selectedAppointmentSlot: null,
      setSelectedAppointmentSlot: (slot) =>
        set({ selectedAppointmentSlot: slot }),
      personalInformation: null,
      setPersonalInformation: (info) => set({ personalInformation: info }),
      auth0id: null,
      setAuth0id: (id) => set({ auth0id: id }),
      clearSelectedLocation: () => set({ selectedLocation: null }),
      clearFilteredLocations: () => set({ filteredLocations: null }),
      clearSelectedAppointmentSlot: () =>
        set({ selectedAppointmentSlot: null }),
      clearPersonalInformation: () => set({ personalInformation: null }),
      clearAuth0id: () => set({ auth0id: null }),
      resetAll: () =>
        set({
          QuerySKUs: [],
          Clusters: [],
          selectedLocation: null,
          filteredLocations: null,
          selectedAppointmentSlot: null,
          personalInformation: null,
          auth0id: null,
        }),
    }),
    {
      name: 'yuuniq-booking',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

export default useStore;
