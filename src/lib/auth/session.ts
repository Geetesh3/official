import { User } from '../../types';
import { STORAGE_KEYS, getStorageItem } from '../../utils/storage';
import { supabase } from '../supabase';

/**
 * Get current authenticated user
 */
export const getCurrentUser = async (): Promise<User | null> => {
  try {
    // First check Supabase session
    const { data: { user } } = await supabase.auth.getUser();
    
    if (user) {
      return {
        id: user.id,
        email: user.email!,
        name: user.user_metadata.name || 'Admin User',
        role: 'admin'
      };
    }

    // Fallback to local storage for demo
    const sessionUser = getStorageItem<{ state: { user: User } }>(STORAGE_KEYS.AUTH);
    if (sessionUser?.state?.user) {
      return sessionUser.state.user;
    }

    return null;
  } catch (error) {
    console.error('Error getting current user:', error);
    return null;
  }
};