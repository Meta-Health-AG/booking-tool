import * as z from 'zod';

export const formSchema = z.object({
  vorname: z.string().min(2, 'Vorname muss mindestens 2 Zeichen lang sein'),
  nachname: z.string().min(2, 'Nachname muss mindestens 2 Zeichen lang sein'),
  email: z.string().email('Ungültige E-Mail-Adresse'),
  geburtsdatum: z.date({
    required_error: 'Bitte wählen Sie ein Geburtsdatum',
  }),
  geschlecht: z.enum(['maennlich', 'weiblich', 'divers'], {
    required_error: 'Bitte wählen Sie ein Geschlecht',
  }),
  strasse: z.string().min(3, 'Straße muss mindestens 3 Zeichen lang sein'),
  plz: z.string().regex(/^\d{4}$/, 'PLZ muss 4 Ziffern enthalten'),
  stadt: z.string().min(2, 'Stadt muss mindestens 2 Zeichen lang sein'),
  ahvNummer: z
    .string()
    .regex(/^\d{13}$/, 'AHV-Nummer muss 13 Ziffern enthalten'),
});

export type FormValues = z.infer<typeof formSchema>;
