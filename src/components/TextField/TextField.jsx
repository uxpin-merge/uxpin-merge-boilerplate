import * as PropTypes from 'prop-types';
import * as React from 'react';
import { TextField } from '@contentful/forma-36-react-components';


const FormaTextField = (props) => (
  <TextField {...props}>
    {props.children}
  </TextField>
);


FormaTextField.propTypes = {
  disabled: PropTypes.bool,
  labelText: PropTypes.string,
  helpText: PropTypes.string,
};



FormaTextField.defaultProps = {
  labelText: "Email address",
  helpText: "Please enter your email address",
};

export { FormaTextField as default };
