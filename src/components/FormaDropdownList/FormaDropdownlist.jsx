import * as PropTypes from 'prop-types';
import * as React from 'react';
import { DropdownList } from '@contentful/forma-36-react-components';


const FormaDropdownList = (props) => (
  <DropdownList {...props} />
);


FormaDropdownList.propTypes = {
    /**
    * @uxpinignoreprop
    */
  children: PropTypes.node,
    /**
    * @uxpinignoreprop
    */
  listRef: PropTypes.shape({ current: PropTypes.instanceOf(React.Component)}),
    /**
    * Adds a border above or below the list
    */
  border: PropTypes.oneOf(["top", "bottom"]),
    /**
    * If set will add a max-height to the list
    */
  maxHeight: PropTypes.string
};



FormaDropdownList.defaultProps = {

};

export { FormaDropdownList as default };
