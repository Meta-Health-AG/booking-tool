import { PageBody } from '@/components/PageBody.tsx';
import { H2, H2W600 } from '@/components/Typography.tsx';
import { useState } from 'react';
import YuuniqCalendar from '@/components/appointments/YuuniqCalendar.tsx';
import TimeZoneDisplay from '@/components/appointments/TimeZoneDisplay.tsx';
import AppointmentPicker from '@/components/appointments/AppointmentPicker.tsx';
import useStore from '@/state/state.ts';
import BookingOverview from '@/components/BookingOverview.tsx';
import { StickyButton } from '@/components/StickyPriceFooter.tsx';

function AppointmentPickerPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const { selectedLocation, Clusters } = useStore();

  return (
    <PageBody>
      <div className={'flex flex-col lg:flex-row lg:gap-8'}>
        {/* Linke Spalte */}
        <div className="flex-1">
          <H2 className="mb-4">Wähle einen Termin für deinen Test</H2>
          <div className="flex flex-col lg:flex-row lg:justify-between lg:max-h-[430px] lg:overflow-hidden items-start w-full bg-white border border-input rounded-xl px-4 py-6 mb-6 lg:mb-10">
            <YuuniqCalendar
              date={date}
              setDate={setDate}
              className={'mb-6 lg:mb-0 lg:mr-6 lg:w-1/2'}
            />
            <div className="lg:w-2/3 lg:mx-auto">
              <H2W600 className={'leading-8'}>Uhrzeit</H2W600>
              <TimeZoneDisplay className={'mb-4'} />
              <AppointmentPicker date={date} />
            </div>
          </div>
        </div>

        {/* Rechte Spalte */}
        <div className="w-full lg:w-[380px]">
          <H2 className="mb-3">Bestellübersicht</H2>
          <BookingOverview
            selectedLocation={selectedLocation!}
            clusters={Clusters}
          />
          <StickyButton />
        </div>
      </div>
    </PageBody>
  );
}

export default AppointmentPickerPage;
