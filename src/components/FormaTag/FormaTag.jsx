import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Tag } from '@contentful/forma-36-react-components';

const FormaTag = (props) => (
  <Tag {...props}>
    {props.children}
  </Tag>
);

FormaTag.propTypes = {
  /**
 * The text of the Tag
 * @uxpinpropname  Text
 */
  children: PropTypes.string,
  /**
 * The Tag type  
 */
  tagType: PropTypes.oneOf(["primary", "primary-filled", "positive", "negative", "warning", "secondary", "featured", "muted"]),
  /**
* The size of the Tag  
*/
  size: PropTypes.oneOf(["small", "default"]),
};

FormaTag.defaultProps = {
  children: "published",
  tagType: "primary",
  size: "default",
};

export { FormaTag as default };
