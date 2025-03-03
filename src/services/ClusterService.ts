import { ClusterResponse } from '@/types.ts';
import { mockClusterData } from '@/mock/MockClusterData.ts';
import { useQuery } from '@tanstack/react-query';

export const clusterService = {
  findClustersByClusterIds: async (
    searchClusterIds: string[],
  ): Promise<ClusterResponse[]> => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    return mockClusterData.filter((cluster) =>
      searchClusterIds.includes(cluster.cluster_id),
    );
  },
};

export const useClustersByClusterIds = (searchClusterIds: string[]) => {
  return useQuery({
    queryKey: ['clusters', 'byClusterIds', searchClusterIds],
    queryFn: () => clusterService.findClustersByClusterIds(searchClusterIds),
  });
};
