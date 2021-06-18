import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Workbench } from '@contentful/forma-36-react-components';



const FormaWorkbench = (props) => (
  <Workbench {...props}>
    {props.children}
  </Workbench>
);


FormaWorkbench.propTypes = {

  children: PropTypes.node,

  // headerTitle: Props.string,

};



FormaWorkbench.defaultProps = {

};

export { FormaWorkbench as default };