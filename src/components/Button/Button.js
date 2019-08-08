import * as PropTypes from 'prop-types';
import * as React from 'react';
import ButtonStyles from './Button.styles';

const Button = (props) => (
  <ButtonStyles {...props}>
    {props.icon}
    {props.children}
  </ButtonStyles>
);

Button.propTypes = {
<<<<<<< HEAD:src/components/Button/Button.js
  /** @uxpinignoreprop */
=======
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['primary', 'secondary', 'success', 'error', 'warning']),
  mode: PropTypes.oneOf(['filled', 'ghost', 'minimal', 'flat']),
   /** @uxpinignoreprop */
  itle: PropTypes.string,
    /** @uxpinignoreprop */
>>>>>>> master:src/Button/Button.js
  background: PropTypes.string,
  /**
   * @uxpinpropname Label
   */
  children: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.node,
  iconDirection: PropTypes.oneOf(['left', 'right']),
  mode: PropTypes.oneOf(['filled', 'ghost', 'minimal', 'flat']),
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl']),
  stretched: PropTypes.bool,
  /**
   * @uxpinignoreprop
   */
  title: PropTypes.string,
  type: PropTypes.oneOf(['primary', 'secondary', 'success', 'error', 'warning']),
};

Button.defaultProps = {
  disabled: false,
  iconDirection: 'left',
  mode: 'filled',
  size: 'm',
  stretched: true,
  type: 'primary',
};

export { Button as default };
