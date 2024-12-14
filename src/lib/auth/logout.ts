import { supabase } from '../supabase';
import { STORAGE_KEYS, removeStorageItem } from '../../utils/storage';

/**
 * Sign out current user
 */
export const signOut = async (): Promise<void> => {
  try {
    await supabase.auth.signOut();
    removeStorageItem(STORAGE_KEYS.AUTH);
  } catch (error) {
    console.error('Error signing out:', error);
    throw error;
  }
};