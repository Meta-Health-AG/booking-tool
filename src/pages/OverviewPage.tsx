import { PageBody } from '@/components/PageBody.tsx';
import { H2 } from '@/components/Typography.tsx';
import BookingOverview from '@/components/BookingOverview.tsx';
import useStore from '@/state/state.ts';

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
      />
    </PageBody>
  );
}

export default ExportPage;
