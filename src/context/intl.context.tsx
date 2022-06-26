import React, { PropsWithChildren, useMemo, useState } from 'react';
import { IntlProvider } from 'react-intl';
import English from '../../content/compiled-locales/en.json';
import Russian from '../../content/compiled-locales/ru.json';
import Polish from '../../content/compiled-locales/pl.json';
import French from '../../content/compiled-locales/fr.json';
import German from '../../content/compiled-locales/de.json';
import Portuguese from '../../content/compiled-locales/pt.json';
import Ukrainian from '../../content/compiled-locales/uk.json';
import Turkish from '../../content/compiled-locales/tr.json';

export const languages = {
  en: 'English',
  fr: 'Français (traduit automatiquement)',
  ru: 'Русский',
  ua: 'Українська (автоматичний переклад)',
  pl: 'Polski',
  de: 'Deutsch (automatisch übersetzt)',
  pt: 'Portuguese (traduzido automaticamente)',
  tr: 'Türkçe (çoğunlukla otomatik olarak çevrildi)',
};

export type Locale = keyof typeof languages;

export interface LocaleContextProps {
  locale: Locale;
  changeLocale: (locale: Locale) => void;
}

const LocaleContext = React.createContext<LocaleContextProps>({
  locale: 'en',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  changeLocale: () => {},
});

export interface IIntlProps {
  locale: keyof typeof languages;
}

function IntlProviderWrapper(props: PropsWithChildren<IIntlProps>) {
  const [locale, setLocale] = useState<keyof typeof languages>(props.locale);

  const messages = useMemo(() => {
    switch (locale) {
      case 'ru':
        return Russian;
      case 'fr':
        return French;
      case 'ua':
        return Ukrainian;
      case 'pl':
        return Polish;
      case 'de':
        return German;
      case 'pt':
        return Portuguese;
      case 'tr':
        return Turkish;
      case 'en':
      default:
        return English;
    }
  }, [locale]);

  return (
    <LocaleContext.Provider
      value={{
        locale: locale,
        changeLocale: setLocale,
      }}
    >
      <IntlProvider
        key={locale}
        locale={locale}
        messages={messages}
        defaultLocale="en"
      >
        {props.children}
      </IntlProvider>
    </LocaleContext.Provider>
  );
}

export { IntlProviderWrapper, LocaleContext };
