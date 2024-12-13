import { supabase } from './supabase';
import { User } from '../types';

export const signIn = async (email: string, password: string): Promise<User | null> => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;

    if (data.user) {
      return {
        id: data.user.id,
        email: data.user.email!,
        name: data.user.user_metadata.name || 'Admin User',
        role: 'admin',
      };
    }

    return null;
  } catch (error) {
    console.error('Error signing in:', error);
    throw error;
  }
};

export const signOut = async () => {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  } catch (error) {
    console.error('Error signing out:', error);
    throw error;
  }
};

export const getCurrentUser = async (): Promise<User | null> => {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (user) {
      return {
        id: user.id,
        email: user.email!,
        name: user.user_metadata.name || 'Admin User',
        role: 'admin',
      };
    }

    return null;
  } catch (error) {
    console.error('Error getting current user:', error);
    return null;
  }
};