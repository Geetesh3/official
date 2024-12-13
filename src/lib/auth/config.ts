export const AUTH_CONFIG = {
  adminEmail: 'admin@geeteshpfl.vercel.app',
  // In a real application, never store passwords in code
  // This is just for demonstration purposes
  adminPassword: 'Geetesh@1234',
};

export const isValidAdminCredentials = (email: string, password: string): boolean => {
  return email === AUTH_CONFIG.adminEmail && password === AUTH_CONFIG.adminPassword;
};