import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Paragraph } from '@contentful/forma-36-react-components';


const FormaParagraph = (props) => (
  <Paragraph {...props}>
    {props.children}
  </Paragraph>
);


FormaParagraph.propTypes = {
  children: PropTypes.string,

  element: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6", "p"])
};



FormaParagraph.defaultProps = {
  children: "Please change ParagraphText",
  element: "p"
};

export { FormaParagraph as default };
