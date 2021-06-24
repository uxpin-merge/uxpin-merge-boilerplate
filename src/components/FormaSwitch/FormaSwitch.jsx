import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Switch } from '@contentful/forma-36-react-components';

function FormaSwitch(props) {
  //State variable 'checked' set to true
  const [isActive, setActive] = React.useState(false);
  //On prop change (re render), set state 'active' to isChecked prop value
  React.useEffect(() => setActive(props.isChecked), [props]);

  return (
    <Switch
      {...props}
      isChecked={isActive}
      onToggle={setActive}
    />
  )
};


FormaSwitch.propTypes = {
  /**
   * Text of Label
   */
  labelText: PropTypes.string,

  /**
   * The size of the switch
   */
  size: PropTypes.oneOf(["small", "large"]),

  /**
 * If checked: Switch will be active
 */
  isChecked: PropTypes.bool,

  /**
   * If checked: the switch will not be usable
   */
  isDisabled: PropTypes.bool,

  /**
   * On toggle event
   * @uxpinignoreprop
   */
  onToggle: PropTypes.func
};

FormaSwitch.defaultProps = {
  isChecked: false,
  size: "large",
  labelText: "Switch Label",
};

export { FormaSwitch as default };
