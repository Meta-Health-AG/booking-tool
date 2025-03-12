import { ClassNameProp, IsVisibleProp } from '@/types.ts';
import { cn } from '@/utils/utils.ts';
import { Button } from '@/components/ui/button.tsx';
import useStore from '@/state/state.ts';
import { calculateTotalPriceWithCurrency } from '@/utils/calculateTotalPriceWithCurrency.ts';
import { H14Semi, H20Semi } from '@/components/Typography.tsx';
import { useMatchRoute, useNavigate } from '@tanstack/react-router';
import { routeConfig } from '@/utils/constants.ts';

type StickyPriceFooterProps = ClassNameProp & IsVisibleProp;
type StickyButtonProps = ClassNameProp & {
  showPriceContent?: boolean;
};

// Extrahiere die gemeinsame Button-Logik in eine separate Komponente
export function StickyButton({ className }: Readonly<StickyButtonProps>) {
  const store = useStore();
  const matchRoute = useMatchRoute();
  const navigator = useNavigate();

  const currentRoute = Object.entries(routeConfig).find(([route]) =>
    matchRoute({ to: route }),
  );

  if (!currentRoute?.[1]) {
    return null;
  }

  const [, config] = currentRoute;

  const handleClick = () => {
    if (config.nextRoute) {
      navigator({ to: config.nextRoute }).then();
    }
  };

  return (
    <Button
      className={cn('w-full', className)}
      disabled={config.isDisabled?.(store) ?? false}
      onClick={handleClick}
    >
      {config.buttonText}
    </Button>
  );
}

function StickyPriceFooter({
  className,
  isVisible = true,
}: Readonly<StickyPriceFooterProps>) {
  const { Clusters } = useStore();

  const content = (
    <div className={'flex justify-between items-center pb-3 lg:hidden'}>
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
      <div className={cn('bg-transparent py-[21px] px-4 lg:hidden', className)}>
        {content}
        <div className="h-[40px]" />
      </div>
    );
  }

  return (
    <div
      className={cn(
        'fixed bottom-0 left-0 right-0 bg-white lg:bg-transparent z-50 py-[21px] px-4 lg:hidden',
        className,
      )}
    >
      {content}
      <StickyButton />
    </div>
  );
}

export default StickyPriceFooter;
