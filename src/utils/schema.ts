export function removeNullSchemas<T>(schemas: Array<T | null | undefined>): T[] {
  return schemas.filter(Boolean) as T[];
}
