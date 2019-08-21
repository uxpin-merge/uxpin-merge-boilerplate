import * as PropTypes from 'prop-types';
import * as React from 'react';
import LinkStyles from './Link.styles';

function Link(props) {
  return (
    <LinkStyles href={props.href}>
      {props.children}
    </LinkStyles>
  );
}

Link.propTypes = {
  /**
    * Provide the content for the Link
    */
  children: PropTypes.node,
  /**
    * Provide the `href` attribute for the <a> node
    */
  href: PropTypes.string,
};

export default Link;
