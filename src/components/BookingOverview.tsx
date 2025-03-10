import { ComponentProps } from 'react';
import { ClusterResponse } from '@/types.ts';
import { H14Semi, Size14Normal } from '@/components/Typography.tsx';
import { cn } from '@/utils/utils.ts';

interface BookingOverviewProps extends ComponentProps<'div'> {
  cluster: ClusterResponse;
}

function BookingOverview({
  cluster,
  className,
}: Readonly<BookingOverviewProps>) {
  return (
    <div
      className={cn('flex items-center justify-between w-full', className)}
      key={cluster.cluster_id}
    >
      <div>
        <H14Semi>{cluster.name}</H14Semi>
        <Size14Normal>{cluster.markers.length} Biomarker</Size14Normal>
      </div>

      <Size14Normal className={'text-black'}>
        {cluster.price} {cluster.currency}
      </Size14Normal>
    </div>
  );
}

export default BookingOverview;
