import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Button } from '@contentful/forma-36-react-components';


const FormaButton = (props) => (
  <Button {...props}>
    {props.label}
  </Button>
);


FormaButton.propTypes = {
  label: PropTypes.string,

  /**
   * The variant of the button
   * @uxpinpropname  variant
   * */
  buttonType: PropTypes.oneOf(["negative", "positive", "primary", "secondary", "warning"]),

  icon: PropTypes.oneOf(["Star", "Asset", "Calendar", "ArrowUp", "ChevronRight"]),

  onClick: PropTypes.func
};



FormaButton.defaultProps = {
  label: "Button",
  buttonType:"primary",
  onChange: () => undefined
};

export { FormaButton as default };





// /**
//  * Determines size variation of Button component
//  * @default medium
//  */
// size?: ButtonSize;
// /**
//  * Applies active styles
//  * @default false
//  */
// isActive?: boolean;
// /**
//  * Disabled interaction and applies disabled styles
//  * @default false
//  */
// disabled?: boolean;
// /**
//  * Button html type attribute
//  */
// type?: 'submit' | 'button' | 'reset';
// /**
//  * Adds dropdown indicator icon
//  */
// isDropdown?: boolean;
// /**
//  * Expects any of the icon components
//  */
// /** @uxpinignoreprop */
// icon?: IconComponent;
// /**
//  * Adds loading indicator icon and disables interactions
//  */
// isLoading?: boolean;
// /**
//  * Forces button to take 100% of the container
//  */
// isFullWidth?: boolean;
// /**
//  * Test id
//  */
// /** @uxpinignoreprop */
// testId?: string;
// /**
//  * Adds onClick function
//  */
// onClick?: () => void;
// /**
//  * Type of Icon
//  */
// iconName?: 'Menu' | 'ArrowDown' | 'ArrowUp';
// iconSize?: 'large' | 'medium' | 'small' | 'tiny';
// iconVariant?:
//   | 'negative'
//   | 'positive'
//   | 'primary'
//   | 'secondary'
//   | 'warning'
//   | 'white';