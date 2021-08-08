/**
 * Removes the falsy types `undefined`, `null` and `false`  or
 * throws an error if any provided value has these values
 * @param values - The values
 * @returns The values without the falsy types
 */
const ensure = <T>(...values: (T | undefined | null | false)[]): T[] =>
  values.map((value) => {
    if (value === undefined || value === null || value === false) {
      throw new TypeError('This value was promised to be there.')
    }
    return value
  })

export default ensure
