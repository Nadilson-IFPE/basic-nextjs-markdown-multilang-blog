import { useRouter } from 'next/router'

import en from '../locales/en'
import pt from '../locales/pt'

export function useLanguages() {
  const { locale } = useRouter()
  const translateStringsByLocale = locale === 'en' ? en : pt

  return translateStringsByLocale
}