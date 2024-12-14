/**
 * Get environment variable with validation
 * @param key Environment variable key
 * @returns Environment variable value
 * @throws Error if environment variable is not defined
 */
export const getEnvVariable = (key: string): string => {
  const value = import.meta.env[key];
  if (!value) {
    throw new Error(`Environment variable ${key} is not defined`);
  }
  return value;
};