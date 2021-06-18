import * as PropTypes from 'prop-types';
import * as React from 'react';
import { ValidationMessage } from '@contentful/forma-36-react-components';

const FormaValidationMessage = (props) => (
  <ValidationMessage {...props}>{props.validationMessageText}</ValidationMessage>
);

FormaValidationMessage.propTypes = {
  /**
   * The variant of the button
   * @uxpinpropname  text
   * */
  validationMessageText: PropTypes.string,
};

FormaValidationMessage.defaultProps = {
  validationMessageText: "Validation Message Text"
};

export { FormaValidationMessage as default };