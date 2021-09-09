import * as PropTypes from 'prop-types';
import * as React from 'react';
import useCustomElement from '../UXPinWrapper/use-custom-element';
import 'road-dropdown';

function Button(props) {
  const [customElementProps, ref] = useCustomElement(props);
  return <road-dropdown {...customElementProps} ref={ref} />;
};

/* eslint-disable sort-keys */
Button.propTypes = {
  label: PropTypes.string,
  option: PropTypes.string,
  options: PropTypes.array,
  onChange: PropTypes.func
};
/* eslint-enable sort-keys */

Button.defaultProps = {
  label: "Select a fruit:",
  option: "option2",
  options: { "option1": { "label": "Apple" }, "option2": { "label": "Banana" }, "option3": { "label": "Orange" } },
  onChange: (value) => console.log(value)
};

export { Button as default };
