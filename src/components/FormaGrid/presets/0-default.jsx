import React from 'react';
import FormaGrid from '../FormaGrid';
import FormaIcons from '../../FormaIcons/FormaIcons'
import FormaGridItem from '../../FormaGridItem/FormaGridItem'


export default (
  <FormaGrid
    uxpId="grid-1"
    
 
    rowGap="spacingM"
    columnGap="spacingM"
  >
    <FormaGridItem uxpId="grid-item-1" style={{ backgroundColor: '#263545', height: '100px', width: '100px' }} />
    <FormaGridItem uxpId="grid-item-2" style={{ backgroundColor: '#263545', height: '100px', width: '100px' }} />
    <FormaGridItem uxpId="grid-item-3" style={{ backgroundColor: '#263545', height: '100px', width: '100px' }} />
    <FormaGridItem uxpId="grid-item-4" style={{ backgroundColor: '#263545', height: '100px', width: '100px' }} />
  </FormaGrid>
);
