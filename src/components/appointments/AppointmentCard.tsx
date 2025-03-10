import { ComponentProps } from 'react';
import { cn } from '@/utils/utils.ts';
import { AppointmentSlot } from '@/types.ts';
import { format } from 'date-fns';
import { Size14Normal } from '@/components/Typography.tsx';

interface AppointmentCardProps extends ComponentProps<'div'> {
  isSelected: boolean;
  onClick: () => void;
  appointmentSlot: AppointmentSlot;
}

function AppointmentCard({
  isSelected,
  onClick,
  appointmentSlot,
  className,
}: Readonly<AppointmentCardProps>) {
  return (
    <button
      className={cn(
        'flex items-center border justify-center py-4 px-3.5 rounded-md',
        isSelected ? 'border-black' : 'border-[rgba(17,17,17,0.10)]',
        className,
      )}
      onClick={onClick}
    >
      <Size14Normal>{format(appointmentSlot.start_time, 'HH:mm')}</Size14Normal>
    </button>
  );
}

export default AppointmentCard;
