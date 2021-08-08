/**
 * Removes falsy types: `undefined`, `null` and `false` types or
 * throws an error if any value has these types
 * @param values - The values that are a union type with `undefined`, `null` and `false`
 * @returns The values without falsy values: `undefined`, `null` and `false`
 */
const ensure = <T>(...values: (T | undefined | null | false)[]): T[] =>
  values.map((value) => {
    if (value === undefined || value === null || value === false) {
      throw new TypeError('This value was promised to be there.')
    }
    return value
  })

export default ensure
