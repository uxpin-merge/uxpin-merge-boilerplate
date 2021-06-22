import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Tooltip } from '@contentful/forma-36-react-components';

/**
 * @uxpinwrappers
 * ---NonResizableWrapper
 */
const FormaTooltip = (props) => (
  <Tooltip {...props} >
    {props.children}
  </Tooltip>
);


FormaTooltip.propTypes = {
  /**
   * The content to be displayed in the tooltip  
   */
  content: PropTypes.node,
  /** 
  * @uxpinignoreprop
  */
  children: PropTypes.node,
  /**
  * @uxpinignoreprop
  */
  containerElement: PropTypes.element,

  isVisible: PropTypes.bool,

  maxWidth: PropTypes.number,

  hideDelay: PropTypes.number,

  onFocus: PropTypes.func,

  onMouseLeave: PropTypes.func,

  onMouseOver: PropTypes.func,

  place: PropTypes.oneOf(["left", "right", "auto", "top", "bottom"]),

  targetWrapperClassName: PropTypes.string,

  usePortal: PropTypes.bool,
};



FormaTooltip.defaultProps = {
content: "Hi I am a tooltip",
usePortal: true,
isVisible: false
// children: "Children Text",
// isVisible: true,
// maxWidth: 360,
// place: "top"
};

export { FormaTooltip as default };
