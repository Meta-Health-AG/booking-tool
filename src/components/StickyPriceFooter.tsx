import { ClassNameProp, IsVisibleProp } from '@/types.ts';
import { cn } from '@/utils/utils.ts';
import { Button } from '@/components/ui/button.tsx';
import useStore from '@/state/state.ts';
import { calculateTotalPriceWithCurrency } from '@/utils/calculateTotalPriceWithCurrency.ts';
import { H14Semi, H20Semi } from '@/components/Typography.tsx';
import { useMatchRoute } from '@tanstack/react-router';

type StickyPriceFooterProps = ClassNameProp & IsVisibleProp;

function StickyPriceFooter({
  className,
  isVisible = true,
}: Readonly<StickyPriceFooterProps>) {
  const { Clusters, selectedLocation } = useStore();
  const matchRoute = useMatchRoute();

  if (matchRoute({ to: '/*' })) {
    return null;
  }

  const content = (
    <div className={'flex justify-between items-center pb-3'}>
      <H14Semi className={`${!isVisible ? 'text-transparent' : ''}`}>
        Gesamt ({Clusters.length} Produkte)
      </H14Semi>
      <H20Semi className={`${!isVisible ? 'text-transparent' : ''}`}>
        {calculateTotalPriceWithCurrency(Clusters)}
      </H20Semi>
    </div>
  );

  if (!isVisible) {
    return (
      <div className={cn('bg-transparent py-[21px] px-4', className)}>
        {content}
        <div className="h-[40px]" />
      </div>
    );
  }

  return (
    <div
      className={cn(
        'fixed bottom-0 left-0 right-0 bg-white z-50 py-[21px] px-4',
        className,
      )}
    >
      {content}
      <Button className={'w-full'} disabled={!selectedLocation}>
        Weiter
      </Button>
    </div>
  );
}

export default StickyPriceFooter;
