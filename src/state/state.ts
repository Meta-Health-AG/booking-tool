import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';
import {ClusterResponse} from "@/types.ts";

interface AppState {
    QuerySKUs: string[];
    setQuerySKUs: (skus: string[]) => void;
    clearQuerySKUs: () => void;
    Clusters: ClusterResponse[];
    setClusters: (clusters: ClusterResponse[]) => void;
    clearClusters: () => void;
}

const useStore = create<AppState>()(
    persist(
        (set) => ({
            QuerySKUs: [],
            setQuerySKUs: (skus) => set({QuerySKUs: skus}),
            clearQuerySKUs: () => set({QuerySKUs: []}),
            Clusters: [],
            setClusters: (clusters) => set({Clusters: clusters}),
            clearClusters: () => set({Clusters: []}),
        }),
        {
            name: 'yuuniq-booking',
            storage: createJSONStorage(() => sessionStorage)
        }
    )
);

export default useStore;