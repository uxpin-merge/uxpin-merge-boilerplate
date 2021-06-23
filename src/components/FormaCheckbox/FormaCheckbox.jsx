import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Checkbox } from '@contentful/forma-36-react-components';


const FormaCheckbox = (props) => (
  <Checkbox {...props} />
);


FormaCheckbox.propTypes = {
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



FormaCheckbox.defaultProps = {
  checked: true,
};

export { FormaCheckbox as default };
