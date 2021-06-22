import * as PropTypes from 'prop-types';
import * as React from 'react';
import { DisplayText } from '@contentful/forma-36-react-components';


const FormaDisplayText = (props) => (
  <DisplayText {...props}>
    {props.children}
  </DisplayText>
);


FormaDisplayText.propTypes = {
  children: PropTypes.string,

  size: PropTypes.oneOf(["large", "huge"]),

  element: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6", "p"])
};



FormaDisplayText.defaultProps = {
  children: "Please change displayText",
  size: "large",
  element: "h1"
};

export { FormaDisplayText as default };
