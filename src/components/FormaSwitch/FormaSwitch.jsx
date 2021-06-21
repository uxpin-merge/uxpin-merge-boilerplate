import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Switch } from '@contentful/forma-36-react-components';


const FormaSwitch = (props) => (
  <Switch {...props} />
);


FormaSwitch.propTypes = {
  labelText: PropTypes.string,
  
  /**
   * @uxpinbind onToggle 0.target.ischecked
   */
  isChecked: PropTypes.bool,

  size: PropTypes.oneOf(["small", "large"]),

  isDisabled: PropTypes.bool,

  onToggle: PropTypes.func
};



FormaSwitch.defaultProps = {
  isChecked: true,
  size: "large",
  labelText: "Switch Label",
};

export { FormaSwitch as default };
