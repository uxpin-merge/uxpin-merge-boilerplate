import * as PropTypes from 'prop-types';
import * as React from 'react';
import { DropdownListItem } from '@contentful/forma-36-react-components';


const FormaDropdownListItem = (props) => {
  const { onClick, onMouseDown, onFocus, onLeave, onEnter, ...other } = props;

  return (


    <DropdownListItem {...props.isTitle
      // If closeable prop = true
      ? { ...other }
      //else
      : { ...props }}>{props.children}</DropdownListItem>
  )
}


FormaDropdownListItem.propTypes = {
  /**
   * The text of the dropdown list item
  * @uxpinpropname Text
  */
  children: PropTypes.string,

  /**
    * @uxpinignoreprop
    */
  listItemRef: PropTypes.shape({ current: PropTypes.instanceOf(HTMLElement) }),

  /**
   * If checked, text will render as title
  */
  isTitle: PropTypes.bool,

  /**
  * If checked, item will be set to active
  */
  isActive: PropTypes.bool,

  /**
  * If checked, item will be set to disable
  */
  isDisabled: PropTypes.bool,

  /**
   * A URL link when clicked.
   */
  href: PropTypes.string,

  /**
   * Function fired when clicked.
   */
  onClick: PropTypes.func,

  /**
   * Function fired when mouse is pressed.
   */
  onMouseDown: PropTypes.func,

  /**
    * @uxpinignoreprop
    */
  submenuToggleLabel: PropTypes.string,

  /**
    * @uxpinignoreprop
    */
  onFocus: PropTypes.func,

  /**
    * @uxpinignoreprop
    */
  onLeave: PropTypes.func,

  /**
    * @uxpinignoreprop
    */
  onEnter: PropTypes.func,
};


FormaDropdownListItem.defaultProps = {

children: "I am a dropdown list item jack"
};

export { FormaDropdownListItem as default };
