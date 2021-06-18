import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Asset } from '@contentful/forma-36-react-components';


const FormaAsset = (props) => (
  <Asset {...props} />
);


FormaAsset.propTypes = {
  src: PropTypes.string,

  status: PropTypes.oneOf(["archived", "published", "draft", "changed", "deleted"]),

  title: PropTypes.string,

  type: PropTypes.oneOf(["audio", "code", "video", "image", "archive", "markup", "pdf", "plaintext"]),
};



FormaAsset.defaultProps = {
  src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
  status: "published",
  title: "A published asset",
  type: "image"
};

export { FormaAsset as default };
