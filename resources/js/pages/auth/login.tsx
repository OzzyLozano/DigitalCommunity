import { Form, Head } from '@inertiajs/react';
import InputError from '@/components/default/input-error';
import PasswordInput from '@/components/default/password-input';
import TextLink from '@/components/default/text-link';
import { Checkbox } from '@/components/default/ui/checkbox';
import { Input } from '@/components/default/ui/input';
import { Label } from '@/components/default/ui/label';
import { Spinner } from '@/components/default/ui/spinner';
import { store } from '@/routes/login';
import { request } from '@/routes/password';

type Props = {
  status?: string;
  canResetPassword: boolean;
};

export default function Login({ status, canResetPassword }: Props) {
  return (
    <>
      <Head title="Iniciar sesión" />

      <Form
        {...store.form()}
        resetOnSuccess={['password']}
        className="flex flex-col gap-6"
      >
        {({ processing, errors }) => (
          <>
            <div className="grid gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Correo</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  required
                  autoFocus
                  tabIndex={1}
                  placeholder="correo@ejemplo.com"
                />
                <InputError message={errors.email} />
              </div>

              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Contraseña</Label>
                  {canResetPassword && (
                    <TextLink
                      href={request()}
                      className="ml-auto text-sm"
                      tabIndex={5}
                    >
                      ¿Olvidaste tu contraseña?
                    </TextLink>
                  )}
                </div>
                <PasswordInput
                  id="password"
                  name="password"
                  required
                  tabIndex={2}
                  autoComplete="current-password"
                  placeholder="Ingresa tu contraseña"
                />
                <InputError message={errors.password} />
              </div>

              <div className="flex items-center space-x-3">
                <Checkbox id="remember" name="remember" tabIndex={3} />
                <Label htmlFor="remember">Recuérdame</Label>
              </div>

              {processing && <Spinner />}
              <button
                type="submit"
                className="mt-4 w-full bg-[#A439E6] hover:bg-[#A439E60f] transition py-2"
                tabIndex={4}
                disabled={processing}
                data-test="login-button"
              >
                Log in
              </button>
            </div>
          </>
        )}
      </Form>

      {status && (
        <div className="mb-4 text-center text-sm font-medium text-green-600">
          {status}
        </div>
      )}
    </>
  );
}

Login.layout = {
  title: 'Inicia sesión',
  description: 'Entra a tu cuenta y busca acerca de tus temas favoritos',
};
