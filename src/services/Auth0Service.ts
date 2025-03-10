import { useMutation } from '@tanstack/react-query';

interface LoginCredentials {
  email: string;
  password: string;
}

interface LoginResponse {
  access_token: string;
  id_token: string;
  expires_in: number;
  token_type: string;
}

export const authService = {
  login: async ({
    email,
    password,
  }: LoginCredentials): Promise<LoginResponse> => {
    const response = await fetch(
      `https://${import.meta.env.VITE_AUTH0_DOMAIN}/oauth/token`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          grant_type: 'password',
          username: email,
          password: password,
          audience: `https://${import.meta.env.VITE_AUTH0_DOMAIN}/api/v2/`,
          scope: 'openid profile email',
          client_id: import.meta.env.VITE_AUTH0_CLIENT_ID,
        }),
      },
    );

    if (!response.ok) {
      throw new Error(`Login fehlgeschlagen: ${response.status}`);
    }

    return response.json();
  },
};

export const useLogin = () => {
  return useMutation({
    mutationFn: (credentials: LoginCredentials) =>
      authService.login(credentials),
  });
};

export const extractAuth0Id = (token: string): string | null => {
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.sub;
  } catch (error) {
    console.error('Failed to extract Auth0 ID from token:', error);
    return null;
  }
};
