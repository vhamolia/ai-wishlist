import { useTranslations } from "next-intl";

export function useDictionary(namespace?: string) {
  const t = useTranslations(namespace);

  /**
   * Retrieves a translation by key if it exists in the current namespace.
   * If it does not exist, it optionally returns a fallback string, otherwise null.
   */
  const getTranslation = (
    key: string,
    values?: Record<string, string | number | Date>,
    fallback?: string
  ): string | null => {
    if (t.has(key)) {
      return t(key, values);
    }
    return fallback ?? null;
  };

  return { getTranslation, has: t.has };
}
