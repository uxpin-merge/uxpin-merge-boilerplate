import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Spinner } from '@contentful/forma-36-react-components';

const FormaSpinner = (props) => (
  <Spinner {...props} />
);

FormaSpinner.propTypes = {
  /**
  * The color of the spinner
  * */
  color: PropTypes.oneOf(["Default", "primary", "white"]),
  /**
  * Controls the size of the spinner. The default size is 20px wide, the small size is 14px wide, and the large size is 36px wide
  * */
  size: PropTypes.oneOf(["Default", "large", "small"]),
  /** @uxpinignoreprop */
  customeSize: PropTypes.number,
};

FormaSpinner.defaultProps = {
  color: "default",
  size: "default",
};

export { FormaSpinner as default };