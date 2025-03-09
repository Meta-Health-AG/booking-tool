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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { PageBody } from '@/components/PageBody';
import { H2, SmallText } from '@/components/Typography';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

import useStore from '@/state/state.ts';
import { DayPicker } from 'react-day-picker';
import { de } from 'date-fns/locale';
import { cn } from '@/lib/utils.ts';
import { format } from 'date-fns';
import 'react-day-picker/dist/style.css';
import { formSchema, FormValues } from '@/lib/personalInformationFormSchema.ts';
import { CalendarIcon } from 'lucide-react';
import { useState } from 'react';

function PersonalInformationPage() {
  const setPersonalInformation = useStore(
    (state) => state.setPersonalInformation,
  );
  const personalInformation = useStore((state) => state.personalInformation);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
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

  const onSubmit = (data: FormValues) => {
    setPersonalInformation(data);
  };

  return (
    <PageBody>
      <H2 className="mb-4">Persönliche Informationen</H2>
      <SmallText className={'text-black mb-4'}>
        Bist du bereits bei YUUNIQ?{' '}
        <span className={'font-bold underline underline-offset-2'}>
          Melde dich an
        </span>
      </SmallText>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="vorname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Vorname</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-white text-sm rounded-xl border-input py-6 px-4"
                      placeholder={'Vorname'}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="nachname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nachname</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-white text-sm rounded-xl border-input py-6 px-4"
                      placeholder={'Nachname'}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-Mail</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-white text-sm rounded-xl border-input py-6 px-4"
                      type="email"
                      placeholder={'E-Mail Adresse'}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="geschlecht"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Geschlecht</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger
                          className={
                            'w-full rounded-xl bg-white py-6 border-input'
                          }
                        >
                          <SelectValue placeholder="Bitte wählen" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="maennlich">Männlich</SelectItem>
                        <SelectItem value="weiblich">Weiblich</SelectItem>
                        <SelectItem value="divers">Divers</SelectItem>
                      </SelectContent>
                    </Select>
                    <div className="form-message-container">
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="geburtsdatum"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Geburtsdatum</FormLabel>
                    <Popover
                      open={isCalendarOpen}
                      onOpenChange={setIsCalendarOpen}
                    >
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            className={cn(
                              'w-full font-normal bg-white rounded-xl py-6 border-input relative text-left pl-10',
                              !field.value && 'text-muted-foreground',
                            )}
                          >
                            <CalendarIcon className="h-4 w-4 text-icon absolute left-3 top-1/2 -translate-y-1/2" />
                            {field.value ? (
                              format(field.value, 'dd.MM.yyyy')
                            ) : (
                              <span className={'pl-2'}>Datum auswählen</span>
                            )}
                          </Button>
                        </FormControl>
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
                          disabled={[{ after: new Date() }]}
                          initialFocus
                          captionLayout="dropdown-buttons"
                          fromYear={1900}
                          toYear={new Date().getFullYear()}
                        />
                      </PopoverContent>
                    </Popover>
                    <div className="form-message-container">
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="strasse"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Strasse</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-white text-sm rounded-xl border-input py-6 px-4"
                      value={field.value || ''}
                      onChange={field.onChange}
                      placeholder={'Strasse'}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="space-y-2">
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="plz"
                  render={({ field }) => (
                    <FormItem className="space-y-0">
                      <FormLabel>PLZ</FormLabel>
                      <FormControl>
                        <Input
                          className="bg-white text-sm rounded-xl border-input py-6 px-4"
                          value={field.value || ''}
                          onChange={field.onChange}
                          maxLength={4}
                          placeholder={'PLZ'}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="stadt"
                  render={({ field }) => (
                    <FormItem className="space-y-0">
                      <FormLabel>Stadt</FormLabel>
                      <FormControl>
                        <Input
                          className="bg-white text-sm rounded-xl border-input py-6 px-4"
                          value={field.value || ''}
                          onChange={field.onChange}
                          placeholder={'Stadt'}
                        />
                      </FormControl>
                    </FormItem>
                  )}
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

            <FormField
              control={form.control}
              name="ahvNummer"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>AHV-Nummer</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-white rounded-xl border-input py-6 px-4"
                      {...field}
                      maxLength={13}
                      placeholder={'AHV-Nummer'}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </form>
      </Form>
    </PageBody>
  );
}

export default PersonalInformationPage;
