/**
 * Removes undefined type and throws an error if it receives undefined.
 * @param argument - The variable
 * @param message - The optional error message
 * Default: 'This value was promised to be there.'
 * @returns The argument without undefined type
 */
const ensure = <T>(
  argument: T | undefined,
  message = 'This value was promised to be there.'
): T => {
  if (typeof argument === 'undefined') {
    throw new TypeError(message)
  }

  return argument
}

export default ensure
