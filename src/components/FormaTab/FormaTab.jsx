import * as PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Tabs } from '@contentful/forma-36-react-components';
import { Tab } from '@contentful/forma-36-react-components';

const FormaTab = (props) => (
    <Tab {...props} >{props.children}</Tab>
  );
  
  
  FormaTab.propTypes = {
    onSelect: PropTypes.func
  }
  FormaTab.defaultProps = {
    onSelect: () => undefined

  };
  
  export { FormaTab as default };