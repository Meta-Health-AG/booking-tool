import { PageBody } from '@/components/PageBody.tsx';
import { H2 } from '@/components/Typography.tsx';
import { useState } from 'react';
import YuuniqCalendar from '@/components/appointments/YuuniqCalendar.tsx';

function LocationsPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <PageBody>
      <H2 className="mb-4">Wähle Datum & Uhrzeit für deinen Test</H2>

      <div className="flex flex-col items-start w-full">
        <YuuniqCalendar date={date} setDate={setDate} />
      </div>
    </PageBody>
  );
}

export default LocationsPage;
