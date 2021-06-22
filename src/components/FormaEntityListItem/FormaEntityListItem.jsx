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
  const { dropDownActive, ...other } = props;
  return (
    <EntityListItem
      {...other} 
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
  dropDownActive: PropTypes.bool,

  title: PropTypes.string,

  description: PropTypes.string,

  contentType: PropTypes.string,

  thumbnailUrl: PropTypes.string,

  thumbnailAltText: PropTypes.string,

  withThumbnail: PropTypes.bool,

  /**
   * @uxpinignoreprop
   */
  entityType: PropTypes.oneOf(["Asset", "Entry", "Release", "entry", "asset"]),

  status: PropTypes.oneOf(["published", "draft", "archieved", "changed"]),

  drodownListElements: PropTypes.element,

  withDragHandle: PropTypes.bool,

  isDragActive: PropTypes.bool,

  cardDragHandleComponent: PropTypes.node,

// /**
//  * @uxpinignoreprop
//  */
//   cardDragHandleProps: PropTypes.

  onClick: PropTypes.func,

  href: PropTypes.string,

  isActionsDisabled: PropTypes.bool,
};



FormaEntityListItem.defaultProps = {
  title: "Change Title",
  contentType: "Change Title",
  description: "Change Description",
  entityType: "Asset",
  status: "published",
  thumbnailAltText: "Change Thumbnail Alt Text",
  thumbnailUrl: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
  withThumbnail: true,
};

export { FormaEntityListItem as default };
