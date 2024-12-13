import { supabase } from '../supabase';

export const signOut = async (): Promise<void> => {
  try {
    await supabase.auth.signOut();
    localStorage.removeItem('auth-storage');
  } catch (error) {
    console.error('Error signing out:', error);
    throw error;
  }
};