'use client';

import { PageBody } from '@/components/PageBody.tsx';
import { H2 } from '@/components/Typography.tsx';
import { Form } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { type Login, loginFormSchema } from '@/utils/formSchemas.ts';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormTextField } from '@/components/FormTextField.tsx';
import { Button } from '@/components/ui/button.tsx';
import { extractAuth0Id, useLogin } from '@/services/Auth0Service.ts';
import useStore from '@/state/state.ts';
import { useNavigate } from '@tanstack/react-router';
import { useEffect } from 'react';
import BookingOverview from '@/components/BookingOverview.tsx';
import { StickyButton } from '@/components/StickyPriceFooter.tsx';

function LoginPage() {
  const {
    setAuth0id,
    clearPersonalInformation,
    auth0id,
    selectedLocation,
    Clusters,
    selectedAppointmentSlot,
  } = useStore();
  const navigator = useNavigate();

  useEffect(() => {
    if (auth0id) {
      navigator({ to: '/overview' }).then();
    }
  }, [auth0id, navigator]);

  const form = useForm<Login>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const loginMutation = useLogin();

  const onSubmit = (data: Login) => {
    loginMutation.mutate(
      { email: data.email, password: data.password },
      {
        onSuccess: (response) => {
          try {
            setAuth0id(extractAuth0Id(response.access_token));
            clearPersonalInformation();
            navigator({ to: '/overview' }).then();
          } catch (error) {
            console.error('Auth0 ID konnte nicht extrahiert werden', error);
          }
        },
      },
    );
  };

  // Only show booking overview if we have the necessary data
  const showBookingOverview =
    selectedLocation && Clusters && selectedAppointmentSlot;

  return (
    <PageBody className="pb-20 md:pb-10">
      <div className="flex flex-col lg:flex-row lg:gap-8">
        {/* Left column - Login Form */}
        <div className="flex-1">
          <H2 className="mb-4">Melde dich bei YUUNIQ an</H2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 gap-6 mb-6">
                <FormTextField
                  control={form.control}
                  name="email"
                  label="E-Mail"
                  placeholder="E-Mail"
                />
                <FormTextField
                  control={form.control}
                  name="password"
                  label="Passwort"
                  placeholder="Passwort"
                  type="password"
                />
              </div>
              <Button
                className="w-full"
                type="submit"
                disabled={loginMutation.isPending}
              >
                {loginMutation.isPending ? 'Wird angemeldet...' : 'Anmelden'}
              </Button>

              {loginMutation.isError && (
                <div className="mt-4 text-red-500">
                  Anmeldung fehlgeschlagen: {loginMutation.error.message}
                </div>
              )}
            </form>
          </Form>
        </div>

        {/* Right column - Booking overview (hidden on mobile, shown on the side for larger screens) */}
        {showBookingOverview && (
          <div className="hidden md:block md:flex-none w-full lg:w-[430px] mt-8 lg:mt-0">
            <H2 className="mb-3">Bestellübersicht</H2>
            <BookingOverview
              selectedLocation={selectedLocation}
              clusters={Clusters}
              selectedAppointmentSlot={selectedAppointmentSlot}
            />
            <StickyButton className="hidden lg:block mt-4" />
          </div>
        )}
      </div>

      {/* Mobile booking overview - shown at the bottom on mobile */}
      {showBookingOverview && (
        <div className="block md:hidden mt-8">
          <H2 className="mb-3">Bestellübersicht</H2>
          <BookingOverview
            selectedLocation={selectedLocation}
            clusters={Clusters}
            selectedAppointmentSlot={selectedAppointmentSlot}
          />
        </div>
      )}

      {/* Mobile sticky button - only visible on small screens */}
      {showBookingOverview && (
        <StickyButton className="md:hidden fixed bottom-0 left-0 right-0 z-10" />
      )}
    </PageBody>
  );
}

export default LoginPage;
