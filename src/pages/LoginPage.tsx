import { PageBody } from '@/components/PageBody.tsx';
import { H2 } from '@/components/Typography.tsx';
import { Form } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { Login, loginFormSchema } from '@/utils/formSchemas.ts';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormTextField } from '@/components/FormTextField.tsx';
import { Button } from '@/components/ui/button.tsx';
import { extractAuth0Id, useLogin } from '@/services/Auth0Service.ts';
import useStore from '@/state/state.ts';

function LoginPage() {
  const setAuth0Id = useStore((state) => state.setAuth0id);

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
          setAuth0Id(extractAuth0Id(response.access_token));
          // TODO redirect to overview page
        },
        onError: (error) => {
          console.error('Login fehlgeschlagen', error);
        },
      },
    );
  };

  return (
    <PageBody>
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
            className={'w-full'}
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
    </PageBody>
  );
}

export default LoginPage;
