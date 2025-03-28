'use client';

import type { ClassNameProp, IsVisibleProp } from '@/types.ts';
import { cn } from '@/utils/utils.ts';
import { Button } from '@/components/ui/button.tsx';
import useStore from '@/state/state.ts';
import { calculateTotalPriceWithCurrency } from '@/utils/calculateTotalPriceWithCurrency.ts';
import { H14Semi, H20Semi } from '@/components/Typography.tsx';
import { useMatchRoute, useNavigate } from '@tanstack/react-router';
import { routeConfig } from '@/utils/constants.ts';
import { useCreateBooking } from '@/services/BookingService.ts';
import { useState } from 'react';
import { Loader2 } from 'lucide-react';

type StickyPriceFooterProps = ClassNameProp & IsVisibleProp;
type StickyButtonProps = ClassNameProp & {
  showPriceContent?: boolean;
};

const transformGender = (
  geschlecht: 'maennlich' | 'weiblich' | 'divers',
): 'M' | 'F' | 'N' => {
  switch (geschlecht) {
    case 'maennlich':
      return 'M';
    case 'weiblich':
      return 'F';
    case 'divers':
      return 'N';
  }
};

export function StickyButton({ className }: Readonly<StickyButtonProps>) {
  const store = useStore();
  const matchRoute = useMatchRoute();
  const navigator = useNavigate();
  const createBooking = useCreateBooking();
  const [isLoading, setIsLoading] = useState(false);

  const currentRoute = Object.entries(routeConfig).find(([route]) =>
    matchRoute({ to: route }),
  );
  if (!currentRoute?.[1]) {
    return null;
  }

  const [route, config] = currentRoute;

  if (route === '/confirmation') {
    return null;
  }

  const handleClick = async () => {
    setIsLoading(true);

    try {
      if (route === '/overview') {
        const {
          selectedLocation,
          selectedAppointmentSlot,
          personalInformation,
          auth0id,
          Clusters,
          resetAll,
        } = store;

        await createBooking.mutateAsync({
          healthcareProviderId: selectedLocation!.id,
          startDatetime: selectedAppointmentSlot!.start_time,
          endDatetime: selectedAppointmentSlot!.end_time,
          clusters: Clusters.map((cluster) => cluster.cluster_id),
          type: selectedLocation!.type,
          auth0Id: auth0id ?? '',
          ...(auth0id
            ? {}
            : {
                patientFirstName: personalInformation!.vorname,
                patientLastName: personalInformation!.nachname,
                patientEmail: personalInformation!.email,
                patientDateOfBirth: personalInformation!.geburtsdatum
                  .toString()
                  .split('T')[0],
                patientGender: transformGender(personalInformation!.geschlecht),
                patientAddress: {
                  street: personalInformation!.strasse,
                  city: personalInformation!.stadt,
                  zip_code: personalInformation!.plz,
                  country: 'Schweiz',
                },
                patientInsurance: {
                  ahv_number: personalInformation!.ahvNummer,
                },
              }),
        });

        history.replaceState({}, '', '/');
        await navigator({ to: '/confirmation' });
        resetAll();
      } else if (config.nextRoute) {
        await navigator({ to: config.nextRoute });
      }
    } catch (error) {
      console.error('Buchung fehlgeschlagen:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const isDisabled = (config.isDisabled?.(store) ?? false) || isLoading;

  return (
    <Button
      className={cn(
        'w-full relative overflow-hidden transition-all duration-300',
        className,
      )}
      disabled={isDisabled}
      onClick={handleClick}
    >
      <span
        className={cn('flex items-center justify-center gap-2', {
          'opacity-0': isLoading,
        })}
      >
        {config.buttonText}
      </span>

      {isLoading && (
        <span className="absolute inset-0 flex items-center justify-center">
          <Loader2 className="h-5 w-5 animate-spin" />
        </span>
      )}
    </Button>
  );
}

function StickyPriceFooter({
  className,
  isVisible = true,
}: Readonly<StickyPriceFooterProps>) {
  const { Clusters } = useStore();
  const matchRoute = useMatchRoute();

  const currentRoute = Object.entries(routeConfig).find(([route]) =>
    matchRoute({ to: route }),
  );
  if (!currentRoute?.[1]) {
    return null;
  }

  const [route] = currentRoute;

  if (route === '/confirmation') {
    return null;
  }

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
