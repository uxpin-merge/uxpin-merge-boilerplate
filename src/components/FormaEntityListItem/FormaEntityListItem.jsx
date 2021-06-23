import * as PropTypes from 'prop-types';
import * as React from 'react';
import { EntityListItem, DropdownListItem, DropdownList } from '@contentful/forma-36-react-components';

const dropDownElement = 
  <DropdownList>
    <DropdownListItem isTitle>Actions</DropdownListItem>
    <DropdownListItem>Edit</DropdownListItem>
    <DropdownListItem>Download</DropdownListItem>
    <DropdownListItem>Remove</DropdownListItem>
  </DropdownList>;

function FormaEntityListItem(props) {
  const { cardDragHandlePropTypes, dropDownActive, ...other } = props;
  return (
    <EntityListItem
      {...other} 
      cardDragHandleProptypes
      dropdownListElements={
        props.dropDownActive
          ? dropDownElement
          : null
      }
  />
  )
}
;

FormaEntityListItem.propTypes = {
  /**
   * Title of entity
   */
  title: PropTypes.string,

  /**
   * Content type of entity
   */
  contentType: PropTypes.string,

  /**
   * Description of entity
   */
  description: PropTypes.string,

  /**
   * A URL to link to
   */
  href: PropTypes.string,

  /**
   * The publish status if the entry
   */
  status: PropTypes.oneOf(["published", "draft", "archived", "changed"]),
  
  /**
   * If checked: A thumbnail will be shown
   * Below we change prop name in UXPin
   * @uxpinpropname Thumbnail
   */
  withThumbnail: PropTypes.bool,

  /**
   * Styling will be applied based on type
   * Below we change prop name in UXPin
   * @uxpinpropname Type
   */
  entityType: PropTypes.oneOf(["Asset", "Entry", "Release"]),

  /**
   * The URL of the entity's preview thumbnail. Use 46px x 46px images for best results
   * @uxpinpropname thmb URL
   */
  thumbnailUrl: PropTypes.string,

  /**
   * The alt text for the thumbnail
   * @uxpinpropname thmb Alt Text
   */
  thumbnailAltText: PropTypes.string,
  
  /**
   * Custom prop - If checked: will enable dropdown icon and functionality
   * Below we change prop name in UXPin
   * @uxpinpropname Drowdown
   */
  dropDownActive: PropTypes.bool,

  /**
   * If checked: will disable dropdown
   * Below we change prop name in UXPin
   * @uxpinpropname Drpdwn disable
   */
  isActionsDisabled: PropTypes.bool,

  /**
   * The DropdownList elements - adjust item dynamically
   */
  dropownListElements: PropTypes.element,

  /**
   * If checked: Renders drag handle
   * Below we change prop name in UXPin
   * @uxpinpropname Drag Handle
   */
  withDragHandle: PropTypes.bool,

  /**
   * If checked: Applies css as if component is being dragged
   */
  isDragActive: PropTypes.bool,

  /**
   * Props to pass to a custom drag handle component
   * Below we change prop name in UXPin
   * @uxpinpropname Custom Drag Handle
   * @uxpinignoreprop
   */
  cardDragHandleComponent: PropTypes.node,

  /**
   * Props to pass to the default drag handle.
   * Does not work with Custom Drag Handle prop
   * @uxpinignoreprop
   */
  // cardDragHandleProps: PropTypes.

  /**
   * OnClick event 
   */
  onClick: PropTypes.func,
};



FormaEntityListItem.defaultProps = {
  title: "Title",
  contentType: "Content Type",
  description: "Description",
  entityType: "Asset",
  status: "published",
  thumbnailAltText: "Change Thumbnail Alt Text",
  withThumbnail: true,
  dropDownActive: true,
};

export { FormaEntityListItem as default };
