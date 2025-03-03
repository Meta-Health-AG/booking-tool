import { APIProvider, Map } from '@vis.gl/react-google-maps';
import { mapStyles } from '@/lib/mapStyles.ts';
import { mapRestrictions } from '@/lib/mapRestrictions.ts';

function YuuniqMap() {
  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <div className="w-full aspect-map">
        <div className="h-full px-4">
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
      <style>{`
                .gmnoprint, .gm-style-cc {
                    display: none !important;
                }
            `}</style>
    </APIProvider>
  );
}

export default YuuniqMap;
