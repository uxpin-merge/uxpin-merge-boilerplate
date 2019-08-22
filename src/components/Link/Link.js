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
      <LinkStyles href={props.href} ref={uxpinRef} size={props.size}>
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
  /**
    * Provide the size of the Link based on the px values in `typography`
    */
  size: PropTypes.oneOf(['xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl']),
};

Link.defaultProps = {
  children: 'Testing',
  href: '#',
  size: 'm',
};

export default Link;
