/**
 * Removes the falsy types `undefined`, `null` and `false` or
 * throws an error if any provided argument is `undefined`, `null` and `false`
 * @param args - The arguments
 * @returns The arguments without the falsy types
 */
const ensure = <T>(...args: (T | undefined | null | false)[]): T[] =>
  args.map((arg) => {
    if (arg === undefined || arg === null || arg === false) {
      throw new TypeError('This value was promised to be here.')
    }
    return arg
  })

export default ensure
