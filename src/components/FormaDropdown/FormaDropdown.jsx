import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Dropdown } from '@contentful/forma-36-react-components';


const FormaDropdown = (props) => (
  <Dropdown {...props} />
);


FormaDropdown.propTypes = {
  submenuToggleLabel: PropTypes.string,

  /**
   * @uxpinignoreprop
   */
  children: PropTypes.node,

  isAutoalignmentEnabled: PropTypes.bool,

  isFullWidth: PropTypes.bool,

  isOpen: PropTypes.bool,

  onClose: PropTypes.func,

  position: PropTypes.oneOf(["left", "right", "top", "bottom"]),

  /**
   * @uxpinignoreprop
   */
  toggleElement: PropTypes.func,
};



FormaDropdown.defaultProps = {

};

export { FormaDropdown as default };
