import { PageBody } from '@/components/PageBody.tsx';
import { H2 } from '@/components/Typography.tsx';
import BookingOverview from '@/components/BookingOverview.tsx';
import useStore from '@/state/state.ts';
import YuuniqMap from '@/components/locations/YuuniqMap.tsx';
import { locationMapZoom } from '@/utils/constants.ts';

function ExportPage() {
  const { selectedLocation, Clusters, selectedAppointmentSlot } = useStore();

  return (
    <PageBody>
      <H2 className="mb-4">Bestellübersicht</H2>
      <BookingOverview
        selectedLocation={selectedLocation!}
        clusters={Clusters}
        selectedAppointmentSlot={selectedAppointmentSlot!}
        showPrice={true}
        className={'mb-10'}
      />
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
          className={'mb-10'}
        />
      )}
    </PageBody>
  );
}

export default ExportPage;
