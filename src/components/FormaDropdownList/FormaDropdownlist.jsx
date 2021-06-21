import * as PropTypes from 'prop-types';
import * as React from 'react';
import { DropdownList } from '@contentful/forma-36-react-components';


const FormaDropdownList = (props) => (
  <DropdownList {...props} />
);


FormaDropdownList.propTypes = {
  listRef: PropTypes.shape({ current: PropTypes.instanceOf(React.Component)}),
  border: PropTypes.oneOf(["top", "bottom"]),
};



FormaDropdownList.defaultProps = {
  border: "bottom",
};

export { FormaDropdownList as default };
