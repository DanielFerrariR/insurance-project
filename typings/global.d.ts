/**
 * From T, pick all properties values
 */
type ValueOf<T> = T[keyof T]

/**
 * From T, pick a set of properties whose keys ends with K
 */
type PickKeyEndWith<
  T extends string,
  K extends string
> = T extends `${infer R}${K}` ? `${R}${K}` : never
