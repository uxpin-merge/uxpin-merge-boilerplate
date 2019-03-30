import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ButtonHooksStyles from './ButtonHooks.styles';

const ButtonHooks = (props) => {
  const [count, setCount] = useState(0);

  return (
    <ButtonHooksStyles {...props} onClick={() => {
      setCount(count + 1);
    }}>
      {props.children}
      {' ' + count}
    </ButtonHooksStyles>
  );
};

ButtonHooks.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['primary', 'secondary', 'success', 'error', 'warning']),
  mode: PropTypes.oneOf(['filled', 'ghost', 'minimal', 'flat']),
  title: PropTypes.string,
  background: PropTypes.string,
  size: PropTypes.oneOf(['xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl']),
  stretched: PropTypes.bool,
  children: PropTypes.string,
};

ButtonHooks.defaultProps = {
  disabled: false,
  mode: 'filled',
  size: 'm',
  stretched: true,
  type: 'primary',
};

export { ButtonHooks as default };
