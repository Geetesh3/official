import { User } from '../../types';
import { AUTH_CONFIG } from './config';

export const getCurrentUser = async (): Promise<User | null> => {
  try {
    // For demo purposes, check local storage for admin session
    const sessionUser = localStorage.getItem('auth-storage');
    if (sessionUser) {
      const parsedUser = JSON.parse(sessionUser);
      if (parsedUser?.state?.user?.email === AUTH_CONFIG.adminEmail) {
        return {
          id: 'admin-1',
          email: AUTH_CONFIG.adminEmail,
          name: 'Admin User',
          role: 'admin'
        };
      }
    }
    return null;
  } catch (error) {
    console.error('Error getting current user:', error);
    return null;
  }
};