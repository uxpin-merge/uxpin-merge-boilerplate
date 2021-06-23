import React from 'react';
import FormaDropdownList from '../FormaDropdownlist';
import FormaDropdownListItem from '../../FormaDropdownListItem/FormaDropDownListItem';

export default (
  <FormaDropdownList 
    uxpId="dropdown-list-1"
    >
      <FormaDropdownListItem isTitle={true} uxpId="DropdownListItem-1" >I am a Title</FormaDropdownListItem>
      <FormaDropdownListItem uxpId="DropdownListItem-2" >First Item</FormaDropdownListItem>
      <FormaDropdownListItem uxpId="DropdownListItem-3" >Second Item</FormaDropdownListItem>
    </FormaDropdownList>
);


