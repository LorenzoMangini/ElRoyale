import strings from './en.json'

export type TranslationKey = keyof typeof strings
export function t(key: TranslationKey): string {
  return strings[key] ?? key
}
