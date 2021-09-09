import * as PropTypes from 'prop-types';
import * as React from 'react';
import useCustomElement from '../UXPinWrapper/use-custom-element';
import '@material/mwc-top-app-bar';
import '@material/mwc-button';

function MwcAppBar(props) {
  const [customElementProps, ref] = useCustomElement(props);
  return <mwc-top-app-bar {...customElementProps} ref={ref}>
     <div slot="title">Titsssle</div>
     <mwc-button icon="file_download" label="click" slot="actionItems" raised></mwc-button>
      </mwc-top-app-bar>
};

/* eslint-disable sort-keys */
MwcAppBar.propTypes = {
    children: PropTypes.node,
//   label: PropTypes.string,
//   icon: PropTypes.string,
};
/* eslint-enable sort-keys */

MwcAppBar.defaultProps = {
//   label: "Select a fruit:",
//   icon: "code"
};

export { MwcAppBar as default };
