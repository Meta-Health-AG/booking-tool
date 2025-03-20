import { ComponentProps, useEffect, useRef, useState } from 'react';
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

  const [isChanging, setIsChanging] = useState(false);

  const formattedDate = date ? format(date, 'yyyy-MM-dd') : '';

  const {
    data: availableTimeslots,
    isLoading,
    refetch,
  } = useAvailableTimeslots(
    selectedLocation?.id ?? '',
    formattedDate,
    selectedLocation?.type,
  );

  const prevDateRef = useRef(formattedDate);
  const prevMonthRef = useRef(date ? date.getMonth() : null);

  useEffect(() => {
    const currentMonth = date ? date.getMonth() : null;
    const isMonthChange = currentMonth !== prevMonthRef.current;

    if (isMonthChange) {
      setIsChanging(true);
      setSelectedAppointmentSlot(null);
      prevMonthRef.current = currentMonth;
    }

    if (
      selectedLocation?.id &&
      formattedDate &&
      (prevDateRef.current !== formattedDate || isMonthChange)
    ) {
      prevDateRef.current = formattedDate;
      refetch({ cancelRefetch: true }).then(() => {
        setIsChanging(false);
      });
    }
  }, [
    selectedLocation?.id,
    formattedDate,
    refetch,
    setSelectedAppointmentSlot,
    date,
  ]);

  return (
    <div className={cn('w-full', className)}>
      <div className="lg:max-h-[300px] w-full overflow-y-auto">
        <div className="grid grid-cols-2 gap-2 w-full">
          {isLoading || isChanging || !date
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
    </div>
  );
}
export default AppointmentPicker;
