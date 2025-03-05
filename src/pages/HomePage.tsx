import { useRedirectOnEmptyState } from '@/hooks/useRedirectOnEmptyState';
import YuuniqMap from '@/components/locations/YuuniqMap.tsx';
import { H2, H3 } from '@/components/Typography';
import { useAllLocations } from '@/services/LocationService';
import { SearchBar } from '@/components/locations/SearchBar.tsx';
import { LocationCardSkeleton } from '@/components/locations/LocationCardSkeleton.tsx';
import { LocationCard } from '@/components/locations/LocationCard.tsx';
import { useState, useCallback } from 'react';
import { Location } from '@/types';
import useStore from '@/state/state.ts';

const SKELETON_ITEMS = ['skeleton-1', 'skeleton-2', 'skeleton-3'] as const;

function HomePage() {
  useRedirectOnEmptyState();
  const { data: locations, isLoading } = useAllLocations();
  const { setSelectedLocation, filteredLocations } = useStore();
  const [mapCenter, setMapCenter] = useState({ lat: 46.8182, lng: 8.2275 });
  const [mapZoom, setMapZoom] = useState(7);

  const handleLocationSelect = useCallback((location: Location) => {
    setSelectedLocation(location);
    if (location.latitude && location.longitude) {
      setMapCenter({ lat: location.latitude, lng: location.longitude });
      setMapZoom(13);
    }
  }, []);

  const displayLocations = filteredLocations || locations;

  return (
    <div className="px-4 mb-2">
      <H2 className="mb-4">Wo möchten Sie sich testen lassen?</H2>
      <SearchBar />
      <YuuniqMap
        className="mb-10"
        locations={displayLocations}
        center={mapCenter}
        zoom={mapZoom}
        onMarkerClick={handleLocationSelect}
        onCenterChanged={(newCenter) => setMapCenter(newCenter)}
        onZoomChanged={(newZoom) => setMapZoom(newZoom)}
      />

      <H3 className="mb-3">
        {filteredLocations ? 'Suchergebnisse' : 'Alle Standorte'}
      </H3>

      <div className="space-y-4">
        {isLoading
          ? SKELETON_ITEMS.map((id) => <LocationCardSkeleton key={id} />)
          : displayLocations?.map((location) => (
              <LocationCard
                key={`${location.name}-${location.address}`}
                location={location}
                onSelect={handleLocationSelect}
              />
            ))}
      </div>
    </div>
  );
}

export default HomePage;
