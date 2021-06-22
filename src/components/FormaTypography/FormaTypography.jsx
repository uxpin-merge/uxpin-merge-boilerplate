import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Typography } from '@contentful/forma-36-react-components';


const FormaTypography = (props) => (
  <Typography {...props}>
    {props.children}
  </Typography>
);


FormaTypography.propTypes = {
  children: PropTypes.node,
};



FormaTypography.defaultProps = {
};

export { FormaTypography as default };
