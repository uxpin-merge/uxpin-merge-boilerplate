import * as PropTypes from 'prop-types';
import * as React from 'react';
import { RadioButton } from '@contentful/forma-36-react-components';


const FormaRadioButton = (props) => (
  <RadioButton {...props} />
);


FormaRadioButton.propTypes = {
  name: PropTypes.string,

  required: PropTypes.bool,

  labelText: PropTypes.string,

  /**
   * @uxpinbind onChange 0.target.checked
   */
  checked: PropTypes.bool,

  onChange: PropTypes.func,

  onBlur: PropTypes.func,

  onFocus: PropTypes.func,

  value: PropTypes.string,

  disabled: PropTypes.bool,

  indeterminate: PropTypes.bool,
};



FormaRadioButton.defaultProps = {
  name: "radio",
  checked: true,
};

export { FormaRadioButton as default };
