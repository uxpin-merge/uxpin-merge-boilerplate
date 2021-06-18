import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Icon } from '@contentful/forma-36-react-components';

const FormaIcons = (props) => (
  <Icon {...props} />
);

FormaIcons.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "positive", "negative", "warning", "muted", "white"]),

  size: PropTypes.oneOf(["tiny", "small", "medium", "large"]),

  icon: PropTypes.oneOf(["Heading", "ArrowDown", "ArrowUp", "Asset", "Calendar"])
};

FormaIcons.defaultProps = {

};

export { FormaIcons as default };