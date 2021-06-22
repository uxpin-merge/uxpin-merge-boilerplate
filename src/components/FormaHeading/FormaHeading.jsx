import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Heading } from '@contentful/forma-36-react-components';


const FormaHeading = (props) => (
  <Heading {...props}>
    {props.children}
  </Heading>
);


FormaHeading.propTypes = {
  children: PropTypes.string,

  element: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6", "p"])
};



FormaHeading.defaultProps = {
  children: "Please change headingText",
  element: "h4"
};

export { FormaHeading as default };
