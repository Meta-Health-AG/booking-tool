import { PageBody } from '@/components/PageBody.tsx';
import { H2, H2W600 } from '@/components/Typography.tsx';
import { useState } from 'react';
import YuuniqCalendar from '@/components/appointments/YuuniqCalendar.tsx';
import TimeZoneDisplay from '@/components/appointments/TimeZoneDisplay.tsx';
import AppointmentPicker from '@/components/appointments/AppointmentPicker.tsx';
import useStore from '@/state/state.ts';
import BookingOverview from '@/components/BookingOverview.tsx';

function AppointmentPickerPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const { selectedLocation, Clusters } = useStore();

  return (
    <PageBody>
      <H2 className="mb-4">Wähle einen Termin für deinen Test</H2>
      <div className="flex flex-col items-start w-full bg-white border border-input rounded-xl px-4 py-6 mb-10">
        <YuuniqCalendar date={date} setDate={setDate} className={'mb-11'} />
        <H2W600 className={'leading-8'}>Uhrzeit</H2W600>
        <TimeZoneDisplay className={'mb-6'} />
        <AppointmentPicker date={date} />
      </div>
      <H2 className="mb-3">Bestellübersicht</H2>
      <BookingOverview
        selectedLocation={selectedLocation!}
        clusters={Clusters}
      />
    </PageBody>
  );
}

export default AppointmentPickerPage;
