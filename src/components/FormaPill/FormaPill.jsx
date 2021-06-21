import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Pill } from '@contentful/forma-36-react-components';


const FormaPill = (props) => (
  <Pill {...props} />
);


FormaPill.propTypes = {
 label: PropTypes.string,

 onClose: PropTypes.func,

 onDrag: PropTypes.func,

 dragHandleComponent: PropTypes.node,
//  dragHandleComponent: PropTypes.oneOf(["Heading", "ArrowDown", "ArrowUp", "Asset", "Calendar"]),

 variant: PropTypes.oneOf(["deleted", "active", "idle"]),
};



FormaPill.defaultProps = {
  label: "example.user@contentful.com",
  variant: "idle",
};

export { FormaPill as default };
