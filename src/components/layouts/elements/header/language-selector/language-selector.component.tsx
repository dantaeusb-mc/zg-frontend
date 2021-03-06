import React from 'react';
import styles from './language-selector.module.scss';
import { languages, Locale, LocaleContext } from '@/context/intl.context';

export default function LanguageSelector(): JSX.Element {
  return (
    <LocaleContext.Consumer>
      {({ locale, changeLocale }) => {
        return (
          <div className={styles['language-wrapper']}>
            <label htmlFor="language-select">
              <div className={styles['language-overlay']}>
                {locale.toUpperCase()}
              </div>
              <select
                id="language-select"
                className={styles['language-select']}
                value={locale}
                onChange={(e) => {
                  changeLocale(e.target.value as Locale);
                }}
              >
                {Object.keys(languages).map((option, iterator) => {
                  return (
                    <option key={iterator} value={option}>
                      {languages[option as Locale]}
                    </option>
                  );
                })}
              </select>
            </label>
          </div>
        );
      }}
    </LocaleContext.Consumer>
  );
}
