import { PageBody } from '@/components/PageBody.tsx';
import { H2 } from '@/components/Typography.tsx';
import BookingOverview from '@/components/BookingOverview.tsx';
import useStore from '@/state/state.ts';
import YuuniqMap from '@/components/locations/YuuniqMap.tsx';
import { locationMapZoom } from '@/utils/constants.ts';
import { StickyButton } from '@/components/StickyPriceFooter.tsx';

function ExportPage() {
  const { selectedLocation, Clusters, selectedAppointmentSlot } = useStore();

  return (
    <PageBody className="pb-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {/* Booking Overview Section */}
        <div>
          <H2 className="mb-4">Bestellübersicht</H2>
          <BookingOverview
            selectedLocation={selectedLocation!}
            clusters={Clusters}
            selectedAppointmentSlot={selectedAppointmentSlot!}
            showPrice={true}
          />
          <StickyButton className="hidden lg:block mt-4" />
        </div>

        {/* Location Map Section */}
        <div>
          <H2 className="mb-4">Standort</H2>
          {selectedLocation?.latitude && selectedLocation?.longitude && (
            <YuuniqMap
              locations={[selectedLocation]}
              center={{
                lat: Number(selectedLocation.latitude),
                lng: Number(selectedLocation.longitude),
              }}
              zoom={locationMapZoom}
              onMarkerClick={() => {}}
              onCenterChanged={() => {}}
              onZoomChanged={() => {}}
              gestureHandling="none"
              className="h-[200px] md:h-[250px] lg:h-[350px] max-h-[350px]"
            />
          )}
        </div>
      </div>
    </PageBody>
  );
}

export default ExportPage;
