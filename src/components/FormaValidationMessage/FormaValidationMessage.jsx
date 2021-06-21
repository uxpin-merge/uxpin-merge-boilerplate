import * as PropTypes from 'prop-types';
import * as React from 'react';
import { ValidationMessage } from '@contentful/forma-36-react-components';

const FormaValidationMessage = (props) => (
  <ValidationMessage {...props}>{props.validationMessageText}</ValidationMessage>
);

FormaValidationMessage.propTypes = {
  /**
   * The validation message to be displayed
   * @uxpinpropname  Text
   * */
  validationMessageText: PropTypes.string,
};

FormaValidationMessage.defaultProps = {
  validationMessageText: "Name is a required field"
};

export { FormaValidationMessage as default };