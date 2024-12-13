import { AuthResponse } from './types';
import { getErrorMessage } from './utils';
import { isValidAdminCredentials } from './config';

export const signIn = async (email: string, password: string): Promise<AuthResponse> => {
  try {
    // For demo purposes, bypass Supabase if admin credentials are correct
    if (isValidAdminCredentials(email, password)) {
      return {
        success: true,
        user: {
          id: 'admin-1',
          email,
          name: 'Admin User',
          role: 'admin'
        }
      };
    }

    return {
      success: false,
      error: {
        message: 'Invalid email or password',
        code: 'invalid_credentials'
      }
    };
  } catch (error) {
    console.error('Error signing in:', error);
    return {
      success: false,
      error: {
        message: getErrorMessage(error),
        code: 'unknown'
      }
    };
  }
};