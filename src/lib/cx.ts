/** Combina nomes de classe, ignorando valores falsos. */
export function cx(...values: Array<string | false | null | undefined>): string {
  return values.filter(Boolean).join(' ')
}
