import * as PropTypes from 'prop-types';
import * as React from 'react';
import { CopyButton } from '@contentful/forma-36-react-components';


const FormaCopyButton = (props) => (
  <CopyButton {...props} />
);


FormaCopyButton.propTypes = {
  /**
   * Tooltip text when hovering
   */
  tooltipText: PropTypes.string,

  /**
   * Tooltip text after clicking button to copy
   */
  tooltipCopiedText: PropTypes.string,

  /**
   * Tooltip for hover and copy location
   */
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

  /**
   * Value to copy after clicking button
   */
  copyValue: PropTypes.string,

  /**
   * Function called on copy
   */
  onCopy: PropTypes.func,
};

FormaCopyButton.defaultProps = {
  tooltipText: "Copy to clipboard",
  tooltipPlace: "top",
  tooltipCopiedText: "Copied!",
  copyValue: "Loren Ipsum",
};

export { FormaCopyButton as default };
