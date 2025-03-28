'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { PageBody } from '@/components/PageBody';
import { H2, SmallText } from '@/components/Typography';
import useStore from '@/state/state';
import {
  personalInformationFormSchema,
  type PersonalInformation,
} from '@/utils/formSchemas.ts';
import { useEffect } from 'react';
import { FormTextField } from '@/components/FormTextField';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select.tsx';
import { Link, useNavigate } from '@tanstack/react-router';
import { StickyButton } from '@/components/StickyPriceFooter.tsx';
import BookingOverview from '@/components/BookingOverview.tsx';

function PersonalInformationPage() {
  const {
    setPersonalInformation,
    auth0id,
    selectedLocation,
    Clusters,
    selectedAppointmentSlot,
  } = useStore();
  const personalInformation = useStore((state) => state.personalInformation);
  const navigator = useNavigate();

  useEffect(() => {
    if (auth0id) {
      navigator({ to: '/overview' }).then();
    }
  }, [auth0id, navigator]);

  const form = useForm<PersonalInformation>({
    resolver: zodResolver(personalInformationFormSchema),
    defaultValues: personalInformation || {
      vorname: '',
      nachname: '',
      email: '',
      strasse: '',
      plz: '',
      stadt: '',
      ahvNummer: '',
      geschlecht: undefined,
      geburtsdatum: undefined,
    },
    mode: 'onChange',
  });

  form.watch((data) => {
    if (
      Object.keys(data).some(
        (key) =>
          data[key as keyof PersonalInformation] !== undefined &&
          data[key as keyof PersonalInformation] !== '',
      )
    ) {
      setPersonalInformation(data as PersonalInformation);
    }
  });

  return (
    <PageBody className="pb-20 md:pb-10">
      <div className="flex flex-col lg:flex-row lg:gap-8">
        {/* Left column - Form */}
        <div className="flex-1">
          <H2 className="mb-4">Persönliche Informationen</H2>
          <SmallText className="text-black mb-4">
            Bist du bereits bei YUUNIQ?{' '}
            <Link
              className="font-bold underline underline-offset-2"
              to={'/login'}
            >
              Melde dich an
            </Link>
          </SmallText>
          <Form {...form}>
            <form className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 gap-4 md:gap-6">
                {/* Name fields - stack on mobile, side by side on larger screens */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <FormTextField
                    control={form.control}
                    name="vorname"
                    label="Vorname"
                    placeholder="Vorname"
                  />
                  <FormTextField
                    control={form.control}
                    name="nachname"
                    label="Nachname"
                    placeholder="Nachname"
                  />
                </div>

                <FormTextField
                  control={form.control}
                  name="email"
                  label="E-Mail"
                  placeholder="E-Mail Adresse"
                  type="email"
                />

                {/* Gender and DOB - stack on small mobile, side by side on larger screens */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  <FormField
                    control={form.control}
                    name="geschlecht"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Geschlecht</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="bg-white text-sm w-full rounded-xl border-input py-6 px-4">
                              <SelectValue placeholder="Geschlecht wählen" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="maennlich">Männlich</SelectItem>
                            <SelectItem value="weiblich">Weiblich</SelectItem>
                            <SelectItem value="divers">Divers</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="space-y-2">
                    <FormLabel>Geburtsdatum</FormLabel>
                    <FormField
                      control={form.control}
                      name="geburtsdatum"
                      render={({ field }) => {
                        // Extract day, month, year from the date or use empty values
                        const date = field.value ? new Date(field.value) : null;

                        // Function to update the date when any field changes
                        const updateDate = (
                          day: number,
                          month: number,
                          year: number,
                        ) => {
                          // Create a new date with the provided values
                          const newDate = new Date(year, month, day);
                          field.onChange(newDate);
                        };

                        return (
                          <div className="flex space-x-2">
                            {/* Day input */}
                            <input
                              type="text"
                              inputMode="numeric"
                              maxLength={2}
                              placeholder="Tag"
                              defaultValue={date ? date.getDate() : ''}
                              onChange={(e) => {
                                const value = e.target.value.replace(/\D/g, '');
                                e.target.value = value;
                                const day = Number.parseInt(value || '1', 10);
                                const month = date ? date.getMonth() : 0;
                                const year = date
                                  ? date.getFullYear()
                                  : new Date().getFullYear();
                                updateDate(day, month, year);
                              }}
                              className="bg-white number-input-reset text-sm text-center rounded-xl border border-input py-0 px-4 w-20"
                            />

                            {/* Month dropdown */}
                            <Select
                              defaultValue={
                                date ? date.getMonth().toString() : '0'
                              }
                              onValueChange={(value) => {
                                const month = Number.parseInt(value, 10);
                                const day = date ? date.getDate() : 1;
                                const year = date
                                  ? date.getFullYear()
                                  : new Date().getFullYear();
                                updateDate(day, month, year);
                              }}
                            >
                              <SelectTrigger className="bg-white text-sm rounded-xl border-input py-6 px-4 w-32">
                                <SelectValue placeholder="Monat" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="0">Januar</SelectItem>
                                <SelectItem value="1">Februar</SelectItem>
                                <SelectItem value="2">März</SelectItem>
                                <SelectItem value="3">April</SelectItem>
                                <SelectItem value="4">Mai</SelectItem>
                                <SelectItem value="5">Juni</SelectItem>
                                <SelectItem value="6">Juli</SelectItem>
                                <SelectItem value="7">August</SelectItem>
                                <SelectItem value="8">September</SelectItem>
                                <SelectItem value="9">Oktober</SelectItem>
                                <SelectItem value="10">November</SelectItem>
                                <SelectItem value="11">Dezember</SelectItem>
                              </SelectContent>
                            </Select>

                            {/* Year input */}
                            <input
                              type="text"
                              inputMode="numeric"
                              maxLength={4}
                              placeholder="Jahr"
                              defaultValue={date ? date.getFullYear() : ''}
                              onChange={(e) => {
                                const value = e.target.value.replace(/\D/g, '');
                                e.target.value = value;
                                const year = Number.parseInt(
                                  value || new Date().getFullYear().toString(),
                                  10,
                                );
                                const day = date ? date.getDate() : 1;
                                const month = date ? date.getMonth() : 0;
                                updateDate(day, month, year);
                              }}
                              className="bg-white text-sm number-input-reset text-center rounded-xl border border-input px-4 w-24"
                            />
                          </div>
                        );
                      }}
                    />
                    {form.formState.errors.geburtsdatum && (
                      <FormMessage>
                        {form.formState.errors.geburtsdatum.message}
                      </FormMessage>
                    )}
                  </div>
                </div>

                <FormTextField
                  control={form.control}
                  name="ahvNummer"
                  label="AHV-Nummer"
                  placeholder="756.####.####.##"
                />

                <FormTextField
                  control={form.control}
                  name="strasse"
                  label="Strasse"
                  placeholder="Strasse"
                />

                {/* PLZ and Stadt - always side by side */}
                <div className="space-y-2">
                  <div className="grid grid-cols-2 gap-4 md:gap-6">
                    <FormTextField
                      control={form.control}
                      name="plz"
                      label="PLZ"
                      placeholder="PLZ"
                      hideFormMessage={true}
                    />
                    <FormTextField
                      control={form.control}
                      name="stadt"
                      label="Stadt"
                      placeholder="Stadt"
                      hideFormMessage={true}
                    />
                  </div>
                  <div className="px-1">
                    {form.formState.errors.plz && (
                      <p className="text-sm font-medium text-destructive">
                        {form.formState.errors.plz.message}
                      </p>
                    )}
                    {form.formState.errors.stadt && (
                      <p className="text-sm font-medium text-destructive">
                        {form.formState.errors.stadt.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </form>
          </Form>
          <div className="hidden lg:block h-20" />
        </div>

        {/* Right column - Booking overview (hidden on mobile, shown on the side for larger screens) */}
        <div className="hidden md:block md:flex-none w-full lg:w-[430px]">
          <H2 className="mb-3">Bestellübersicht</H2>
          <BookingOverview
            selectedLocation={selectedLocation!}
            clusters={Clusters}
            selectedAppointmentSlot={selectedAppointmentSlot!}
          />
          <StickyButton className="hidden lg:block mt-4" />
        </div>
      </div>
    </PageBody>
  );
}

export default PersonalInformationPage;
