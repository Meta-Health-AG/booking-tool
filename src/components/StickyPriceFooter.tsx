// In StickyPriceFooter.tsx
import { ClassNameProp, IsVisibleProp } from '@/types.ts';
import { cn } from '@/utils/utils.ts';
import { Button } from '@/components/ui/button.tsx';
import useStore from '@/state/state.ts';
import { calculateTotalPriceWithCurrency } from '@/utils/calculateTotalPriceWithCurrency.ts';
import { H14Semi, H20Semi } from '@/components/Typography.tsx';
import { useMatchRoute, useNavigate } from '@tanstack/react-router';
import { routeConfig } from '@/utils/constants.ts';

type StickyPriceFooterProps = ClassNameProp & IsVisibleProp;

function StickyPriceFooter({
  className,
  isVisible = true,
}: Readonly<StickyPriceFooterProps>) {
  const store = useStore();
  const { Clusters } = store;
  const matchRoute = useMatchRoute();
  const navigator = useNavigate();

  const currentRoute = Object.entries(routeConfig).find(([route]) =>
    matchRoute({ to: route }),
  );

  if (!currentRoute?.[1]) {
    return null;
  }

  const [, config] = currentRoute;

  const content = (
    <div className={'flex justify-between items-center pb-3'}>
      <H14Semi className={cn({ 'text-transparent': !isVisible })}>
        Gesamt ({Clusters.length} Produkte)
      </H14Semi>
      <H20Semi className={cn({ 'text-transparent': !isVisible })}>
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

  const handleClick = () => {
    if (config.nextRoute) {
      navigator({ to: config.nextRoute }).then();
    }
  };

  return (
    <div
      className={cn(
        'fixed bottom-0 left-0 right-0 bg-white z-50 py-[21px] px-4',
        className,
      )}
    >
      {content}
      <Button
        className={'w-full'}
        disabled={config.isDisabled?.(store) ?? false}
        onClick={handleClick}
      >
        {config.buttonText}
      </Button>
    </div>
  );
}

export default StickyPriceFooter;
