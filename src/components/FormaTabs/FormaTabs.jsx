import * as PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Tabs } from '@contentful/forma-36-react-components';
import { Tab } from '@contentful/forma-36-react-components';
import { TabPanel } from '@contentful/forma-36-react-components';
import { Button } from '@contentful/forma-36-react-components';

import '@contentful/forma-36-react-components/dist/styles.css';

function FormaTabs(props) {
  const [selected, setSelected] = useState('first');
  
  function handleClick() {
    alert("works");
    setSelected('second');
  }
  return (
    <div>
      <Tabs {...props}>

        {/* <Tab
          id="second"
          selected={selected === 'second'}
          onSelect={handleClick}
        >
          Second
        </Tab> */}
        {props.children}
        {React.Children.map(props.children, (child, index) => {
<Button onClick={handleClick}>{child.props.children}</Button>
           })}
      </Tabs>


      {/* {selected === 'first' && (
        <TabPanel id="first">content first tab</TabPanel>
      )}
      {selected === 'second' && (
        <TabPanel id="second">content second tab</TabPanel>
      )}
      {selected === 'third' && (
        <TabPanel id="third">content third tab</TabPanel>
      )} */}
    </div>
  );
      };


/* eslint-disable sort-keys */
FormaTabs.propTypes = {
    label: PropTypes.string,
//   onClick: PropTypes.func,
//   disabled: PropTypes.bool,
//   type: PropTypes.oneOf(['primary', 'secondary', 'success', 'error', 'warning']),
//   mode: PropTypes.oneOf(['filled', 'ghost', 'minimal', 'flat']),
//   /** @uxpinignoreprop */
//   title: PropTypes.string,
//   /** @uxpinignoreprop */
//   background: PropTypes.string,
//   /**
//    * @uxpinpropname Label
//    */
children: PropTypes.node,

//   icon: PropTypes.node,
//   iconDirection: PropTypes.oneOf(['left', 'right']),
//   size: PropTypes.oneOf(['xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl']),
//   stretched: PropTypes.bool,
};
/* eslint-enable sort-keys */

FormaTabs.defaultProps = {
//   disabled: false,
//   iconDirection: 'left',
//   mode: 'filled',
//   size: 'm',
//   stretched: true,
//   type: 'primary',
};

export { FormaTabs as default };
