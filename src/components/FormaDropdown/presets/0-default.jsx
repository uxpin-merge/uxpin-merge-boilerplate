import React from 'react';
import FormaButton from '../../FormaButton/FormaButton';
import { Button } from '@contentful/forma-36-react-components';
import FormaDropdown from '../FormaDropdown';

export default (
  <FormaDropdown 
    uxpId="Button-1"
    toggleElement={<FormaButton buttonType="muted" indicateDropdown onClick={function noRefCheck(){}} size="small">Open dropdown</FormaButton>}
    position="right"
    />
);


