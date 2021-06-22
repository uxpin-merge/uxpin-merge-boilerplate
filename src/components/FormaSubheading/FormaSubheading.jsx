import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Subheading } from '@contentful/forma-36-react-components';


const FormaSubheading = (props) => (
  <Subheading {...props}>
    {props.children}
  </Subheading>
);


FormaSubheading.propTypes = {
  children: PropTypes.string,

  element: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6", "p"])
};



FormaSubheading.defaultProps = {
  children: "Please change SubheadingText",
  element: "h4"
};

export { FormaSubheading as default };
