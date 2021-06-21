import * as PropTypes from 'prop-types';
import * as React from 'react';
import { DropdownListItem } from '@contentful/forma-36-react-components';


const FormaDropdownListItem = (props) => (
  <DropdownListItem {...props} />
);


FormaDropdownListItem.propTypes = {
  DropdownListItemText: PropTypes.string,
  children: PropTypes.string,

  isDisabled: PropTypes.bool,

  listItemRef: PropTypes.shape({ current: PropTypes.instanceOf(HTMLElement)}),

  isActive: PropTypes.bool,

  isTitle: PropTypes.bool,

  onClick: PropTypes.func,

  onMouseDown: PropTypes.func,

  submenuToggleLabel: PropTypes.string,

  href: PropTypes.string,

  onFocus: PropTypes.func,

  onLeave: PropTypes.func,

  onEnter: PropTypes.func,
};



FormaDropdownListItem.defaultProps = {
  DropdownListItemText: "Test text",
  children: "Test text",
};

export { FormaDropdownListItem as default };
