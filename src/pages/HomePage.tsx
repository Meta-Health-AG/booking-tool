import { useRedirectOnEmptyState } from '@/hooks/useRedirectOnEmptyState';
import YuuniqMap from '@/components/YuuniqMap';
import { H2, H3 } from '@/components/Typography';
import { useAllLocations } from '@/services/LocationService';
import { SearchBar } from '@/components/locations/SearchBar.tsx';
import { LocationCardSkeleton } from '@/components/locations/LocationCardSkeleton.tsx';
import { LocationCard } from '@/components/locations/LocationCard.tsx';

const SKELETON_ITEMS = ['skeleton-1', 'skeleton-2', 'skeleton-3'] as const;

function HomePage() {
  useRedirectOnEmptyState();
  const { data: locations, isLoading } = useAllLocations();

  return (
    <div className="px-4">
      <H2 className="mb-4">Wo möchten Sie sich testen lassen?</H2>
      <SearchBar />
      <YuuniqMap className="mb-10" />
      <H3 className="mb-3">Standorte in deiner Nähe</H3>

      <div className="space-y-4">
        {isLoading
          ? SKELETON_ITEMS.map((id) => <LocationCardSkeleton key={id} />)
          : locations?.map((location) => (
              <LocationCard
                key={`${location.name}-${location.address}`}
                location={location}
              />
            ))}
      </div>
    </div>
  );
}

export default HomePage;
