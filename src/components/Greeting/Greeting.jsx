import * as PropTypes from 'prop-types';
import * as React from 'react';
import withI18n from '../i18n/withI18n';
import { GreetingContainer } from './Greeting.styles';

/**
 * @uxpincomponent
 */
function Greeting({ lang, name, t }) {
  return (
    <GreetingContainer>
      {`${t('Hello', lang)} ${name}! 👋`}
    </GreetingContainer>
  );
}

Greeting.propTypes = {
  lang: PropTypes.oneOf(['de', 'en', 'pl']),
  name: PropTypes.string,
  /**
   * @uxpinignoreprop
   */
  t: PropTypes.func.isRequired,
};

Greeting.defaultProps = {
  lang: 'pl',
};

export default withI18n({
  de: {
    Hello: 'Hallo',
  },
  en: {
    Hello: 'Hello',
  },
  pl: {
    Hello: 'Cześć',
  },
}, 'en')(Greeting);
