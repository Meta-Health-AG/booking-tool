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
  PersonalInformation,
} from '@/utils/formSchemas.ts';
import { CalendarIcon } from 'lucide-react';
import { useState } from 'react';
import { FormTextField } from '@/components/FormTextField';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select.tsx';
import { Button } from '@/components/ui/button.tsx';

function PersonalInformationPage() {
  const setPersonalInformation = useStore(
    (state) => state.setPersonalInformation,
  );
  const personalInformation = useStore((state) => state.personalInformation);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

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

  const onSubmit = (data: PersonalInformation) => {
    setPersonalInformation(data);
  };

  return (
    <PageBody className={'pb-12'}>
      <H2 className="mb-4">Persönliche Informationen</H2>
      <SmallText className="text-black mb-4">
        Bist du bereits bei YUUNIQ?{' '}
        <span className="font-bold underline underline-offset-2">
          Melde dich an
        </span>
      </SmallText>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 gap-6">
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
            <FormTextField
              control={form.control}
              name="email"
              label="E-Mail"
              placeholder="E-Mail Adresse"
              type="email"
            />
            <div className="flex space-x-6">
              <div className="w-1/2">
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
                          <SelectTrigger className="bg-white text-sm rounded-xl border-input py-6 px-4">
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
              </div>

              <div className="w-1/2">
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
                            onSelect={(date) => {
                              field.onChange(date);
                              setIsCalendarOpen(false);
                            }}
                            locale={de}
                            className={cn('p-3')}
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
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
            <div className={'space-y-2'}>
              <div className={'flex space-x-6'}>
                <div className={'w-1/2'}>
                  <FormTextField
                    control={form.control}
                    name="plz"
                    label="PLZ"
                    placeholder="PLZ"
                    hideFormMessage={true}
                  />
                </div>
                <div className={'w-1/2'}>
                  <FormTextField
                    control={form.control}
                    name="stadt"
                    label="Stadt"
                    placeholder="Stadt"
                    hideFormMessage={true}
                  />
                </div>
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
    </PageBody>
  );
}

export default PersonalInformationPage;
