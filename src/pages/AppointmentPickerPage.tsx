import { PageBody } from '@/components/PageBody.tsx';
import { H2, H2W600 } from '@/components/Typography.tsx';
import { useState } from 'react';
import YuuniqCalendar from '@/components/appointments/YuuniqCalendar.tsx';

function LocationsPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <PageBody>
      <H2 className="mb-4">Wähle einen Termin für deinen Test</H2>

      <div className="flex flex-col items-start w-full bg-white border border-input rounded-xl px-4 pt-5">
        <YuuniqCalendar date={date} setDate={setDate} className={'mb-11'} />
        <div>
          <H2W600>Uhrzeit</H2W600>
        </div>
      </div>
    </PageBody>
  );
}

export default LocationsPage;
