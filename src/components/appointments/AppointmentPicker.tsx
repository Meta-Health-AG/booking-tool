import { ComponentProps, useEffect } from 'react';
import { cn } from '@/utils/utils.ts';
import { useAvailableTimeslots } from '@/services/AppointmentService.ts';
import useStore from '@/state/state.ts';
import { format } from 'date-fns';
import AppointmentCard from '@/components/appointments/AppointmentCard.tsx';
import AppointmentCardSkeleton from '@/components/appointments/AppointmentCardSkeleton.tsx';
import { APPOINTMENT_SKELETONS } from '@/utils/constants.ts';

interface AppointmentPickerProps extends ComponentProps<'div'> {
  date: Date | undefined;
}

function AppointmentPicker({
  className,
  date,
}: Readonly<AppointmentPickerProps>) {
  const {
    selectedLocation,
    selectedAppointmentSlot,
    setSelectedAppointmentSlot,
  } = useStore();

  const formattedDate = date ? format(date, 'yyyy-MM-dd') : '';

  const {
    data: availableTimeslots,
    isLoading,
    refetch,
  } = useAvailableTimeslots(selectedLocation?.id ?? '', formattedDate);

  useEffect(() => {
    if (selectedLocation?.id && formattedDate) {
      refetch({ cancelRefetch: true }).then();
    }
  }, [selectedLocation?.id, formattedDate, refetch]);

  return (
    <div className={cn('space-y-4 w-full', className)}>
      <div className="grid grid-cols-2 gap-y-2 gap-x-1 w-full">
        {isLoading
          ? APPOINTMENT_SKELETONS.map((item) => (
              <AppointmentCardSkeleton key={item} />
            ))
          : availableTimeslots?.available_slots.map((slot) => (
              <AppointmentCard
                key={`${slot.start_time}-${slot.end_time}`}
                appointmentSlot={slot}
                isSelected={
                  selectedAppointmentSlot?.start_time === slot.start_time
                }
                onClick={() => setSelectedAppointmentSlot(slot)}
              />
            ))}
      </div>
    </div>
  );
}

export default AppointmentPicker;
