/**
 * Capitalize a string
 * @param word - The string
 * @returns The capitalized string
 */
const capitalize = (word: string): string =>
  word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()

export default capitalize
