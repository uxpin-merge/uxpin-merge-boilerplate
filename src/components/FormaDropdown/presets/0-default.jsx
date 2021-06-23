import React from 'react';
import FormaDropdown from '../FormaDropdown';
import FormaDropdownlist from '../../FormaDropdownList/FormaDropdownlist';
import FormaDropDownListItem from '../../FormaDropdownListItem/FormaDropDownListItem';

export default (
  <FormaDropdown
    uxpId="dropdown-1"
    triggerText="This is the button text"
    submenuToggleLabel="Dropdown label"
    isOpen={false}
  >
    <FormaDropdownlist uxpId="dropdown-list-1">
      <FormaDropDownListItem isTitle uxpId="dropdown-list-item-1">Dropdown title</FormaDropDownListItem>
      <FormaDropDownListItem uxpId="dropdown-list-item-2"> Dropdown list item 1</FormaDropDownListItem>
      <FormaDropDownListItem uxpId="dropdown-list-item-3">Dropdown list item 2</FormaDropDownListItem>
    </FormaDropdownlist>
  </FormaDropdown >
)
