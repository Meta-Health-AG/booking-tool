import { useRedirectOnEmptyState } from '@/hooks/useRedirectOnEmptyState.ts';
import YuuniqMap from '@/components/YuuniqMap.tsx';

function HomePage() {
  useRedirectOnEmptyState();

  return (
    <>
      <YuuniqMap />
    </>
  );
}

export default HomePage;
