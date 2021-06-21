import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Tooltip } from '@contentful/forma-36-react-components';


const FormaTooltip = (props) => (
  <Tooltip {...props} />
);


FormaTooltip.propTypes = {
  content: PropTypes.node,

  children: PropTypes.node,

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
children: "Children Text",
isVisible: false,
maxWidth: 360,
place: "top"
};

export { FormaTooltip as default };
