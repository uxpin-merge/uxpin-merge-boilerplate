import * as PropTypes from 'prop-types';
import * as React from 'react';
import { CopyButton } from '@contentful/forma-36-react-components';


const FormaCopyButton = (props) => (
  <CopyButton {...props} />
);


FormaCopyButton.propTypes = {
  tooltipText: PropTypes.string,

  tooltipCopiedText: PropTypes.string,

  copyValue: PropTypes.string,

  tooltipPlace: PropTypes.oneOf(["left",
    "right",
    "auto",
    "auto-start",
    "auto-end",
    "top",
    "bottom",
    "top-start",
    "top-end",
    "bottom-start",
    "bottom-end",
    "right-start",
    "right-end",
    "left-start",
    "left-end"]),

  onCopy: PropTypes.func,
};



FormaCopyButton.defaultProps = {
  tooltipText: "Copy to clipboard",
  tooltipPlace: "top",
  tooltipCopiedText: "Copied!",
  copyValue: "Loren Ipsum",
};

export { FormaCopyButton as default };
