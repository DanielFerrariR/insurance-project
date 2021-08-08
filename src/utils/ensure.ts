/**
 * Removes falsy types: `undefined`, `null` and `false` types.
 * @param value - The variable
 * @param message - The optional error message
 * Default: 'This value was promised to be there.'
 * @returns The value without falsy values
 */
const ensure = <T>(
  value: T | undefined | null | false,
  message = 'This value was promised to be there.'
): T => {
  if (value === undefined || value === null || value === false) {
    throw new TypeError(message)
  }

  return value
}

export default ensure
