import * as z from 'zod';

export const personalInformationFormSchema = z.object({
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
    .regex(
      /^756\.\d{4}\.\d{4}\.\d{2}$/,
      'AHV-Nummer muss im Format 756.####.####.## sein',
    ),
});

export type PersonalInformation = z.infer<typeof personalInformationFormSchema>;

export const loginFormSchema = z.object({
  email: z.string().email('Ungültige E-Mail-Adresse'),
  password: z.string().min(2, 'Ungültiges Passwort'),
});

export type Login = z.infer<typeof loginFormSchema>;
