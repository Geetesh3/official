/**
 * Validate email format
 * @param email Email to validate
 * @returns True if email is valid
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate password strength
 * @param password Password to validate
 * @returns True if password meets requirements
 */
export const isValidPassword = (password: string): boolean => {
  return password.length >= 8;
};