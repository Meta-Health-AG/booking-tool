import { LocationCard } from '@/components/locations/LocationCard.tsx';
import { cn } from '@/utils/utils.ts';
import Divider from '@/components/Divider.tsx';
import BookingOverviewClusterItem from '@/components/BookingOverviewClusterItem.tsx';
import { AppointmentSlot, ClusterResponse, Location } from '@/types.ts';
import { format } from 'date-fns';
import {
  H14Semi,
  H20Semi,
  LocationTitle,
  Size14Normal,
} from '@/components/Typography.tsx';
import { CalendarIcon, ClockIcon } from 'lucide-react';
import { calculateTotalPriceWithCurrency } from '@/utils/calculateTotalPriceWithCurrency.ts';

interface BookingOverviewProps {
  selectedLocation: Location;
  clusters: ClusterResponse[];
  selectedAppointmentSlot?: AppointmentSlot;
  className?: string;
  showPrice?: boolean;
}

function BookingOverview({
  selectedLocation,
  clusters,
  className,
  selectedAppointmentSlot,
  showPrice = false,
}: BookingOverviewProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-start w-full bg-white border border-input rounded-xl px-6 py-8',
        className,
      )}
    >
      <LocationCard
        location={selectedLocation}
        className={'p-0 border-0 rounded-none'}
      />
      {selectedAppointmentSlot && (
        <div className={'w-full'}>
          <Divider className={'my-6'} />
          <LocationTitle className={'mb-2'}>Termin</LocationTitle>
          <div className={'flex items-center space-x-1'}>
            <CalendarIcon size={16} />
            <Size14Normal>
              {format(selectedAppointmentSlot?.start_time, 'dd.MM.yyyy')}
            </Size14Normal>
          </div>
          <div className={'flex items-center space-x-1'}>
            <ClockIcon size={16} />
            <Size14Normal>
              {format(selectedAppointmentSlot?.start_time, 'HH:mm')}
              {' - '}
              {format(selectedAppointmentSlot?.end_time, 'HH:mm')}
            </Size14Normal>
          </div>
        </div>
      )}
      <Divider className={'my-6'} />
      <div className={'w-full space-y-4'}>
        {clusters.map((cluster) => (
          <BookingOverviewClusterItem
            key={cluster.cluster_id}
            cluster={cluster}
          />
        ))}
      </div>
      {showPrice && (
        <div className={'w-full'}>
          <Divider className={'my-6'} />
          <div className={'flex justify-between items-baseline'}>
            <H14Semi>Gesamt</H14Semi>
            <H20Semi>{calculateTotalPriceWithCurrency(clusters)}</H20Semi>
          </div>
        </div>
      )}
    </div>
  );
}

export default BookingOverview;
