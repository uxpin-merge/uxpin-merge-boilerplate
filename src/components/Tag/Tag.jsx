import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Tag } from '@contentful/forma-36-react-components';
const FormaTag = (props) => (
  <Tag {...props}>
    {props.tagText}
  </Tag>
);
  FormaTag.propTypes = {
    tagType: PropTypes.oneOf(["primary", "primary-filled", "positive", "negative", "warning", "secondary", "featured", "muted"]),
    size: PropTypes.oneOf(["small", "default"]),
    tagText: PropTypes.string,
};

  FormaTag.defaultProps = {
    tagText: "published",
    tagType: "primary",
    size: "default",
};

export { FormaTag as default };
