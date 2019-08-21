import * as PropTypes from 'prop-types';
import * as React from 'react';
import { LinkStyles } from './Link.styles';

/**
 * @uxpinwrappers
 * SkipContainerWrapper
 */
function Link({ ...props }, uxpinRef) {
  return (
    <div>
      <LinkStyles href={props.href} ref={uxpinRef}>
        {props.children}
      </LinkStyles>
    </div>
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

Link.defaultProps = {
  children: 'Testing',
  href: '#',
};

export default Link;
