import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User } from '../types';
import { signIn, signOut, getCurrentUser } from '../lib/auth';

interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  checkAuth: () => Promise<void>;
  clearError: () => void;
}

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isLoading: false,
      error: null,
      login: async (email: string, password: string) => {
        try {
          set({ isLoading: true, error: null });
          const response = await signIn(email, password);
          
          if (!response.success || !response.user) {
            set({ 
              error: response.error?.message || 'Login failed',
              isLoading: false 
            });
            return;
          }

          set({ user: response.user, isLoading: false });
        } catch (error) {
          set({ 
            error: 'An unexpected error occurred',
            isLoading: false 
          });
        }
      },
      logout: async () => {
        try {
          set({ isLoading: true, error: null });
          await signOut();
          set({ user: null, isLoading: false });
        } catch (error) {
          set({ 
            error: 'An unexpected error occurred',
            isLoading: false 
          });
        }
      },
      checkAuth: async () => {
        try {
          set({ isLoading: true, error: null });
          const user = await getCurrentUser();
          set({ user, isLoading: false });
        } catch (error) {
          set({ 
            user: null,
            error: null,
            isLoading: false 
          });
        }
      },
      clearError: () => set({ error: null }),
    }),
    {
      name: 'auth-storage',
    }
  )
);

export default useAuthStore;