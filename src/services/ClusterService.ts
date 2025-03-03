import {ClusterResponse} from "@/types.ts";
import {mockClusterData} from "@/mock/MockClusterData.ts";
import {useQuery} from '@tanstack/react-query';


export const clusterService = {
    findClustersByClusterId: async (searchClusterIds: string[]): Promise<ClusterResponse[]> => {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500));

        return mockClusterData.filter(cluster =>
            searchClusterIds.includes(cluster.cluster_id)
        );
    }
};


export const useClustersByMarkers = (searchClusterIds: string[]) => {
    return useQuery({
        queryKey: ['clusters', 'byClusterIds', searchClusterIds],
        queryFn: () => clusterService.findClustersByClusterId(searchClusterIds)
    });
};







