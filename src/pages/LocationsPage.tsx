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
import { PageBody } from '@/components/PageBody.tsx';
import {
  defaultMapCenter,
  defaultMapZoom,
  locationMapZoom,
  SKELETON_ITEMS,
} from '@/utils/constants.ts';

function LocationsPage() {
  useRedirectOnEmptyState();
  const { data: locations, isLoading } = useAllLocations();
  const { setSelectedLocation, filteredLocations } = useStore();
  const [mapCenter, setMapCenter] = useState(defaultMapCenter);
  const [mapZoom, setMapZoom] = useState(defaultMapZoom);

  const handleLocationSelect = useCallback((location: Location) => {
    setSelectedLocation(location);
    if (location.latitude && location.longitude) {
      setMapCenter({ lat: location.latitude, lng: location.longitude });
      setMapZoom(locationMapZoom);
    }
  }, []);

  const displayLocations = filteredLocations || locations;

  return (
    <PageBody>
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
                onClick={handleLocationSelect}
              />
            ))}
      </div>
    </PageBody>
  );
}

export default LocationsPage;
