import { get } from 'lodash';
import * as React from 'react';

export default function withI18n(translations, defaultLang = 'en') {
  return function (WrappedComponent) {
    function t(key, lang = defaultLang) {
      return get(translations, `${lang}.${key}`, key);
    }

    return function (props) {
      return (
        <WrappedComponent
          {...props}
          t={t}
        />
      );
    };
  };
}
