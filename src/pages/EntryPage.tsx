import { useSearch, useNavigate } from '@tanstack/react-router';
import { useEffect } from 'react';
import useStore from '@/state/state.ts';
import { useClustersByClusterIds } from '@/services/ClusterService.ts';

function EntryPage() {
  const search = useSearch({
    from: '/entry',
  });
  const navigate = useNavigate();
  const setQuerySKUs = useStore((state) => state.setQuerySKUs);
  const setClusters = useStore((state) => state.setClusters);

  const skuArray = search.skus.split(',');
  const { data: clusters } = useClustersByClusterIds(skuArray);

  useEffect(() => {
    const handleData = async () => {
      setQuerySKUs(skuArray);

      if (clusters) {
        setClusters(clusters);
        await navigate({ to: '/' });
      }
    };

    handleData().catch(console.error);
  }, [skuArray, clusters, setQuerySKUs, setClusters, navigate]);

  return null;
}

export default EntryPage;
