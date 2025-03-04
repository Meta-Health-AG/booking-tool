import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { ClusterResponse, Location } from '@/types.ts';

interface AppState {
  QuerySKUs: string[];
  setQuerySKUs: (skus: string[]) => void;
  clearQuerySKUs: () => void;
  Clusters: ClusterResponse[];
  setClusters: (clusters: ClusterResponse[]) => void;
  clearClusters: () => void;
  selectedLocation: Location | null;
  setSelectedLocation: (location: Location | null) => void;
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
    }),
    {
      name: 'yuuniq-booking',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

export default useStore;
