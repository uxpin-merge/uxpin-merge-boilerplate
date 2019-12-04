import React from 'react';
import PropTypes from 'prop-types';
import ButtonRadekStyles from './ButtonRadek.styles';

const ButtonRadek = (props) => (
  <ButtonRadekStyles {...props}>
    {props.icon}
    {props.children}
  </ButtonRadekStyles>
);

ButtonRadek.propTypes = {
  background: PropTypes.string,
  children: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.node,
  iconDirection: PropTypes.oneOf(['left', 'right']),
  mode: PropTypes.oneOf(['filled', 'ghost', 'minimal', 'flat']),
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl']),
  stretched: PropTypes.bool,
  title: PropTypes.string,
  type: PropTypes.oneOf(['primary', 'secondary', 'success', 'error', 'warning']),
};

ButtonRadek.defaultProps = {
  disabled: false,
  iconDirection: 'left',
  mode: 'filled',
  size: 'm',
  stretched: true,
  type: 'primary',
};

export { ButtonRadek as default };
