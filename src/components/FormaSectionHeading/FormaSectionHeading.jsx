import * as PropTypes from 'prop-types';
import * as React from 'react';
import { SectionHeading } from '@contentful/forma-36-react-components';


const FormaSectionHeading = (props) => (
  <SectionHeading {...props}>
    {props.children}
  </SectionHeading>
);


FormaSectionHeading.propTypes = {
  children: PropTypes.string,

  element: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6", "p"])
};



FormaSectionHeading.defaultProps = {
  children: "Please change SectionHeadingText",
  element: "h4"
};

export { FormaSectionHeading as default };
