import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Illustration } from '@contentful/forma-36-react-components';
const illustations =[
  "Archive",
  "Audio",
  "Image",
  "Markup",
  "Pdf",
  "Plaintext",
  "Presentation",
  "Richtext",
  "Spreadsheet",
  "Video",
]

const FormaIllustration = (props) => (
  <Illustration {...props} />
);


FormaIllustration.propTypes = {
  illustration: PropTypes.oneOf(illustations)
}


FormaIllustration.defaultProps = {
illustration: "Archive",
};

export { FormaIllustration as default };
