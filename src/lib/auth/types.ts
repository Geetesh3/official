export interface AuthError {
  message: string;
  code: string;
}

export interface AuthResponse {
  success: boolean;
  error?: AuthError;
  user?: {
    id: string;
    email: string;
    name: string;
    role: 'admin';
  };
}

export interface AuthService {
  signIn: (email: string, password: string) => Promise<AuthResponse>;
  signOut: () => Promise<void>;
  getCurrentUser: () => Promise<AuthResponse>;
}