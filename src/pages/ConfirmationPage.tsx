import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageBody } from '@/components/PageBody';
import { FaIdCard } from 'react-icons/fa6';
import { MdRestaurant } from 'react-icons/md';
import { useSuccessStore } from '@/state/success-state.ts';
import { saveAs } from 'file-saver';

export default function ConfirmationPage() {
  const { bookingResponse } = useSuccessStore();

  const handleAddToCalendar = () => {
    if (!bookingResponse?.ics) return;

    const blob = new Blob([bookingResponse.ics], {
      type: 'text/calendar;charset=utf-8',
    });

    saveAs(blob, `termin-${bookingResponse.booking_id}.ics`);
  };

  return (
    <PageBody className="py-10">
      <div className="flex flex-col items-center">
        {/* Bestätigungskarte */}
        <div className="w-full max-w-md bg-white rounded-lg shadow-sm p-6 md:p-8 mb-8">
          <div className="flex flex-col items-center text-center">
            {/* Erfolgssymbol */}
            <div className="w-16 h-16 rounded-full border-2 border-green-500 flex items-center justify-center mb-4">
              <Check className="h-8 w-8 text-green-500" />
            </div>

            {/* Bestätigungsnachricht */}
            <h2 className="text-lg md:text-xl font-semibold mb-2 text-center">
              Alles erledigt! Ihr Bluttest-Termin ist bestätigt.
            </h2>

            {/* E-Mail-Info */}
            <p className="text-sm text-gray-500 mb-6">
              Vielen Dank. Die Details Ihres Termins werden an Ihre
              E-Mail-Adresse gesendet:{' '}
              <span className="font-medium">
                {bookingResponse?.email ?? ''}
              </span>
            </p>

            {/* Aktionsschaltflächen */}
            <div className="flex gap-3 w-full">
              <Button
                className="flex-1 bg-black text-white hover:bg-gray-800"
                onClick={handleAddToCalendar}
              >
                Zum Kalender hinzufügen
              </Button>
            </div>
          </div>
        </div>

        {/* Nächste Schritte */}
        <div className="w-full max-w-md">
          <h3 className="font-semibold mb-4">Nächste Schritte</h3>

          <div className="space-y-4">
            {/* Nüchternheit erforderlich */}
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                <MdRestaurant className="w-5 h-5" />
              </div>
              <div>
                <p className="font-medium">Nüchternheit erforderlich</p>
                <p className="text-sm text-gray-500">
                  Bitte bleiben Sie 8-12 Stunden vor dem Test nüchtern
                </p>
              </div>
            </div>

            {/* Ausweis mitbringen */}
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                <FaIdCard className="w-5 h-5" />
              </div>
              <div>
                <p className="font-medium">Ausweis mitbringen</p>
                <p className="text-sm text-gray-500">
                  Amtlicher Lichtbildausweis erforderlich
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageBody>
  );
}
