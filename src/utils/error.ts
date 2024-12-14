/**
 * Get error message from error object
 * @param error Error object
 * @returns Error message string
 */
export const getErrorMessage = (error: unknown): string => {
  if (error instanceof Error) return error.message;
  return String(error);
};

/**
 * Create custom error with code
 */
export class CustomError extends Error {
  constructor(
    message: string,
    public code: string
  ) {
    super(message);
    this.name = 'CustomError';
  }
}