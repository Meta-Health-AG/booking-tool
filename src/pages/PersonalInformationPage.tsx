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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import useStore from '@/state/state';
import { DayPicker } from 'react-day-picker';
import { de } from 'date-fns/locale';
import { cn } from '@/utils/utils';
import { format } from 'date-fns';
import 'react-day-picker/dist/style.css';
import {
  personalInformationFormSchema,
  type PersonalInformation,
} from '@/utils/formSchemas.ts';
import { CalendarIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { FormTextField } from '@/components/FormTextField';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select.tsx';
import { Button } from '@/components/ui/button.tsx';
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
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
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

                  <FormField
                    control={form.control}
                    name="geburtsdatum"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Geburtsdatum</FormLabel>
                        <Popover
                          open={isCalendarOpen}
                          onOpenChange={setIsCalendarOpen}
                        >
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className="bg-white text-sm rounded-xl border-input py-6 px-4 w-full justify-start text-left font-normal"
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {field.value ? (
                                format(field.value, 'PPP', { locale: de })
                              ) : (
                                <span>MM.DD.YYYY</span>
                              )}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <DayPicker
                              mode="single"
                              selected={field.value}
                              defaultMonth={field.value || undefined}
                              onSelect={(date) => {
                                if (date) {
                                  const localDate = new Date(
                                    Date.UTC(
                                      date.getFullYear(),
                                      date.getMonth(),
                                      date.getDate(),
                                      12,
                                      0,
                                      0,
                                      0,
                                    ),
                                  );
                                  field.onChange(localDate);
                                }
                                setIsCalendarOpen(false);
                              }}
                              locale={de}
                              className={cn('p-3')}
                              disabled={[{ after: new Date() }]}
                              initialFocus
                              captionLayout="dropdown-buttons"
                              fromYear={1900}
                              toYear={new Date().getFullYear()}
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
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
