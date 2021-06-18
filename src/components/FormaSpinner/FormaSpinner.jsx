import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Spinner } from '@contentful/forma-36-react-components';

const FormaSpinner = (props) => (
  <Spinner {...props} />
);

FormaSpinner.propTypes = {
  color: PropTypes.oneOf(["primary", "white"]),

  size: PropTypes.oneOf(["large", "small"]),

  customeSize: PropTypes.number,
};

FormaSpinner.defaultProps = {
  color: "default",
  size: "default",
};

export { FormaSpinner as default };