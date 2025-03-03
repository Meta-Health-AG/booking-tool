import { useSearch, useNavigate } from '@tanstack/react-router';
import { useEffect } from 'react';
import useStore from '@/state/state.ts';
import { clusterService } from '@/services/ClusterService.ts';

function EntryPage() {
  const search = useSearch({
    from: '/entry',
  });
  const navigate = useNavigate();
  const setQuerySKUs = useStore((state) => state.setQuerySKUs);
  const setClusters = useStore((state) => state.setClusters);

  useEffect(() => {
    const fetchAndSetData = async () => {
      const skus = search.skus as string;
      const skuArray: string[] = skus.split(',');

      setQuerySKUs(skuArray);

      const clusters = await clusterService.findClustersByClusterIds(skuArray);
      setClusters(clusters);

      await navigate({ to: '/' });
    };

    fetchAndSetData().catch(console.error);
  }, [search.skus, setQuerySKUs, setClusters, navigate]);

  return null;
}

export default EntryPage;
