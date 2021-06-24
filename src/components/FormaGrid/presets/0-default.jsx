import React from 'react';
import FormaGrid from '../FormaGrid';
import FormaButton from '../../FormaButton/FormaButton'
import FormaGridItem from '../../FormaGridItem/FormaGridItem'


export default (
  <FormaGrid
    uxpId="grid-1"
    columns={2}
    rowGap="spacingM"
    columnGap="spacingM"
  >
    <FormaGridItem uxpId="grid-item-1"><FormaButton label="1" isFullWidth uxpId="grid-item-button-1" /></FormaGridItem>
    <FormaGridItem uxpId="grid-item-2"><FormaButton label="2" isFullWidth uxpId="grid-item-button-2" /></FormaGridItem>
    <FormaGridItem uxpId="grid-item-3"><FormaButton label="3" isFullWidth uxpId="grid-item-button-3" /></FormaGridItem>
    <FormaGridItem uxpId="grid-item-4"><FormaButton label="4" isFullWidth uxpId="grid-item-button-4" /></FormaGridItem>
  </FormaGrid>
);
