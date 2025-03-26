import {
  APIProvider,
  Map,
  AdvancedMarker,
  MapEvent,
} from '@vis.gl/react-google-maps';
import * as React from 'react';
import { cn } from '@/utils/utils.ts';
import { Location } from '@/types';
import useStore from '@/state/state.ts';
import { FaHouseMedical } from 'react-icons/fa6';
import { BiTestTube } from 'react-icons/bi';
import { mapRestrictions } from '@/utils/constants.ts';

interface YuuniqMapProps extends React.ComponentProps<'div'> {
  locations?: Location[];
  center: { lat: number; lng: number };
  zoom: number;
  onMarkerClick: (location: Location) => void;
  onCenterChanged: (center: { lat: number; lng: number }) => void;
  onZoomChanged: (zoom: number) => void;
  gestureHandling?: 'none' | 'greedy' | 'cooperative' | 'auto';
}

function YuuniqMap({
  className,
  locations = [],
  center,
  zoom,
  onMarkerClick,
  onCenterChanged,
  onZoomChanged,
  gestureHandling,
}: Readonly<YuuniqMapProps>) {
  const { selectedLocation } = useStore();

  const handleCameraChange = (
    ev: MapEvent<{ center: { lat: number; lng: number }; zoom: number }>,
  ) => {
    const { center, zoom } = ev.detail;
    onCenterChanged(center);
    onZoomChanged(zoom);
  };

  return (
    <APIProvider
      apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
      libraries={['marker']}
    >
      <div className={cn('w-full aspect-map', className)}>
        <div className="h-full">
          <div className="h-full rounded-lg border border-input overflow-hidden">
            <Map
              mapId={'5446cb627054ce40'}
              style={{ width: '100%', height: '100%' }}
              center={center}
              zoom={zoom}
              gestureHandling={gestureHandling ?? 'greedy'}
              disableDefaultUI={true}
              mapTypeControl={false}
              keyboardShortcuts={false}
              restriction={mapRestrictions}
              onCameraChanged={handleCameraChange}
              clickableIcons={false}
            >
              {locations.map((location) =>
                location.latitude && location.longitude ? (
                  <AdvancedMarker
                    key={`${location.name}-${location.address}`}
                    position={{
                      lat: location.latitude,
                      lng: location.longitude,
                    }}
                    onClick={() => onMarkerClick(location)}
                  >
                    <div
                      className={cn(
                        'w-8 h-8 rounded-full flex items-center justify-center',
                        selectedLocation?.name === location.name
                          ? 'bg-black text-white'
                          : 'bg-white text-black',
                      )}
                    >
                      {location.type === 'Yuuniq' ? (
                        <FaHouseMedical className="w-4 h-4" />
                      ) : (
                        <BiTestTube className="w-4 h-4" />
                      )}
                    </div>
                  </AdvancedMarker>
                ) : null,
              )}
            </Map>
          </div>
        </div>
      </div>
      <style>{`
        .gmnoprint, .gm-style-cc {
          display: none !important;
        }
      `}</style>
    </APIProvider>
  );
}

export default YuuniqMap;
