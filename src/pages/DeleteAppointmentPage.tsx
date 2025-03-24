import { useState } from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { PageBody } from '@/components/PageBody.tsx';
import { TbCalendarCancel } from 'react-icons/tb';
import { useGetBookingByOrderNumber } from '@/services/BookingService.ts';
import { useParams } from '@tanstack/react-router';
import { useLocationById } from '@/services/LocationService.ts';

export default function DeleteAppointmentPage() {
  const [showDialog, setShowDialog] = useState(false);
  const [isTerminCancelled, setIsTerminCancelled] = useState(false);

  const { id } = useParams({ from: '/delete-appointment/$id' });
  const { data: bookingData } = useGetBookingByOrderNumber(id);

  const { data: locationData } = useLocationById('671f886afbc5391e71ee7dbd');

  console.log(bookingData);
  console.log(locationData);

  const handleCancelTermin = () => {
    setIsTerminCancelled(true);
    setShowDialog(false);
  };

  return (
    <PageBody>
      <main className="flex-1 p-4">
        <div className="max-w-md mx-auto">
          {!isTerminCancelled ? (
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                  <TbCalendarCancel className="w-8 h-8 text-icon" />
                </div>
              </div>

              <Button
                className="w-full bg-red-500 hover:bg-red-50"
                onClick={() => setShowDialog(true)}
              >
                Termin absagen
              </Button>
            </div>
          ) : (
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                  <Check className="w-8 h-8 text-icon" />
                </div>
                <h1 className="text-xl font-bold mb-2">
                  Termin erfolgreich abgesagt
                </h1>
              </div>

              <Button className="w-full text-white">Neuen Termin buchen</Button>
            </div>
          )}
        </div>
      </main>

      {/* Confirmation Dialog */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Termin absagen?</DialogTitle>
            <DialogDescription>
              Sind Sie sicher, dass Sie Ihren Bluttest-Termin absagen möchten?
              Diese Aktion kann nicht rückgängig gemacht werden.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex flex-col sm:flex-row sm:justify-between gap-2">
            <Button
              variant="outline"
              onClick={() => setShowDialog(false)}
              className="sm:w-auto w-full"
            >
              Abbrechen
            </Button>
            <Button
              onClick={handleCancelTermin}
              className="bg-red-500 hover:bg-red-600 sm:w-auto w-full"
            >
              Ja, Termin absagen
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </PageBody>
  );
}
