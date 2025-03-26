import { useRedirectOnEmptyState } from '@/hooks/useRedirectOnEmptyState';
import YuuniqMap from '@/components/locations/YuuniqMap.tsx';
import { H2, H3 } from '@/components/Typography';
import { useAllLocations } from '@/services/LocationService';
import { SearchBar } from '@/components/locations/SearchBar.tsx';
import { LocationCardSkeleton } from '@/components/locations/LocationCardSkeleton.tsx';
import { LocationCard } from '@/components/locations/LocationCard.tsx';
import { useState, useCallback, FC, useEffect } from 'react';
import { Location } from '@/types';
import useStore from '@/state/state.ts';
import { PageBody } from '@/components/PageBody.tsx';
import {
  defaultMapCenter,
  defaultMapZoom,
  locationMapZoom,
  SKELETON_ITEMS,
} from '@/utils/constants.ts';
import { StickyButton } from '@/components/StickyPriceFooter.tsx';

interface LocationsListProps {
  isMobile?: boolean;
  isLoading: boolean;
  filteredLocations: Location[];
  displayLocations: Location[];
  handleLocationSelect: (location: Location) => void;
}

const LocationsList: FC<LocationsListProps> = ({
  isMobile = false,
  isLoading,
  filteredLocations,
  displayLocations,
  handleLocationSelect,
}) => (
  <div className="h-full flex flex-col">
    <H3 className="mb-3 flex-shrink-0">
      {filteredLocations ? 'Suchergebnisse' : 'Alle Standorte'}
    </H3>
    <div className="flex-1 overflow-y-auto min-h-0">
      <div className="space-y-4 pr-4">
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
    </div>
    {!isMobile && (
      <div className="flex-shrink-0 pt-4">
        <StickyButton />
      </div>
    )}
  </div>
);

function LocationsPage() {
  useRedirectOnEmptyState();
  const { data: locations, isLoading } = useAllLocations();
  const { setAllLocations, setSelectedLocation, filteredLocations } =
    useStore();
  const [mapCenter, setMapCenter] = useState(defaultMapCenter);
  const [mapZoom, setMapZoom] = useState(defaultMapZoom);

  useEffect(() => {
    if (locations) {
      setAllLocations(locations);
    }
  }, [locations]);

  const handleLocationSelect = useCallback((location: Location) => {
    setSelectedLocation(location);
    if (location.latitude && location.longitude) {
      const newCenter = { lat: location.latitude, lng: location.longitude };
      setMapCenter(newCenter);
      setMapZoom(locationMapZoom);
    }
  }, []);

  const displayLocations = filteredLocations || locations;

  return (
    <PageBody>
      <div className={'flex flex-col lg:flex-row lg:h-full lg:gap-8'}>
        <div className={'order-1 lg:w-1/2 lg:h-full lg:flex lg:flex-col'}>
          <div className="lg:flex-shrink-0 mb-4 lg:w-2/3 lg:ml-auto">
            <H2 className="mb-4">Wo möchten Sie sich testen lassen?</H2>
            <SearchBar />
          </div>

          {/* Desktop Locations List */}
          <div
            className={
              'hidden lg:block lg:flex-1 lg:min-h-0 lg:w-2/3 lg:ml-auto mt-4'
            }
          >
            <LocationsList
              isLoading={isLoading}
              filteredLocations={filteredLocations!}
              displayLocations={displayLocations!}
              handleLocationSelect={handleLocationSelect}
            />
          </div>
        </div>

        <YuuniqMap
          className="mb-10 order-2 lg:w-1/2 lg:h-full"
          locations={displayLocations}
          center={mapCenter}
          zoom={mapZoom}
          gestureHandling="greedy"
          onMarkerClick={handleLocationSelect}
          onCenterChanged={(newCenter) => setMapCenter(newCenter)}
          onZoomChanged={(newZoom) => setMapZoom(newZoom)}
        />

        {/* Mobile Locations List */}
        <div className={'order-3 lg:hidden'}>
          <LocationsList
            isMobile
            isLoading={isLoading}
            filteredLocations={filteredLocations!}
            displayLocations={displayLocations!}
            handleLocationSelect={handleLocationSelect}
          />
        </div>
      </div>
    </PageBody>
  );
}

export default LocationsPage;
