import { Control, FieldValues, Path } from 'react-hook-form';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input.tsx';

interface FormTextFieldProps<T extends FieldValues> {
  name: Path<T>;
  label: string;
  placeholder: string;
  control: Control<T>;
  type?: string;
  hideFormMessage?: boolean;
}

export const FormTextField = <T extends FieldValues>({
  name,
  label,
  placeholder,
  control,
  type = 'text',
  hideFormMessage,
}: FormTextFieldProps<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              className="bg-white text-sm rounded-xl border-input py-6 px-4"
              type={type}
              placeholder={placeholder}
              {...field}
            />
          </FormControl>
          {hideFormMessage ?? <FormMessage />}
        </FormItem>
      )}
    />
  );
};
