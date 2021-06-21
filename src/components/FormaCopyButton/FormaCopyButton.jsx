import * as PropTypes from 'prop-types';
import * as React from 'react';
import { CopyButton } from '@contentful/forma-36-react-components';


const FormaCopyButton = (props) => (
  <CopyButton {...props} />
);


FormaCopyButton.propTypes = {
  tooltipText: PropTypes.node,

  tooltipCopiedText: PropTypes.node,

  copyValue: PropTypes.string,

  tooltipPlace: PropTypes.oneOf(["left", "right"]),

  onCopy: PropTypes.func,
};



FormaCopyButton.defaultProps = {
  tooltipText: "Copy to clipboard",
  tooltipCopiedText: "Copied!",
  copyValue: "Loren Ipsum",
  tooltipPlace: "left",
};

export { FormaCopyButton as default };
