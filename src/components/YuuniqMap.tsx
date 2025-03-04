import { APIProvider, Map } from '@vis.gl/react-google-maps';
import { mapStyles } from '@/lib/mapStyles.ts';
import { mapRestrictions } from '@/lib/mapRestrictions.ts';
import * as React from 'react';
import { clsx } from 'clsx';

function YuuniqMap({ className }: React.ComponentProps<'div'>) {
  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <div className={clsx('w-full aspect-map', className)}>
        <div className="h-full">
          <div className="h-full rounded-lg border border-black overflow-hidden">
            <Map
              style={{ width: '100%', height: '100%' }}
              defaultCenter={{ lat: 46.8182, lng: 8.2275 }}
              defaultZoom={6.5}
              gestureHandling={'greedy'}
              disableDefaultUI={true}
              mapTypeControl={false}
              keyboardShortcuts={false}
              restriction={mapRestrictions}
              styles={mapStyles}
            />
          </div>
        </div>
      </div>
      {/* Removes the Terms of Service of the Map*/}
      <style>
        {`
          .gmnoprint, .gm-style-cc {
            display: none !important;
          }
        `}
      </style>
    </APIProvider>
  );
}

export default YuuniqMap;
