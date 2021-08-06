type ValueOf<T> = T[keyof T]

type PickKeyEndWith<
  T extends string,
  K extends string
> = T extends `${infer R}${K}` ? `${R}${K}` : never
