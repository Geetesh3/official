import { AuthResponse } from './types';
import { getErrorMessage } from '../../utils/error';
import { isValidEmail, isValidPassword } from '../../utils/validation';
import { supabase } from '../supabase';

/**
 * Sign in user with email and password
 */
export const signIn = async (email: string, password: string): Promise<AuthResponse> => {
  try {
    // Validate input
    if (!isValidEmail(email)) {
      return {
        success: false,
        error: {
          message: 'Invalid email format',
          code: 'invalid_email'
        }
      };
    }

    if (!isValidPassword(password)) {
      return {
        success: false,
        error: {
          message: 'Password must be at least 8 characters',
          code: 'invalid_password'
        }
      };
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) throw error;

    if (data.user) {
      return {
        success: true,
        user: {
          id: data.user.id,
          email: data.user.email!,
          name: data.user.user_metadata.name || 'Admin User',
          role: 'admin'
        }
      };
    }

    return {
      success: false,
      error: {
        message: 'Invalid credentials',
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