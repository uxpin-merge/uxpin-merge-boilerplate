import React from 'react';
import PropTypes from 'prop-types';

/**
 * @uxpinnamespace Select
 */
export default function SelectItem(props) {
  return (
    <span>
      {props.children}
    </span>
  );
}

SelectItem.propTypes = {
  children: PropTypes.string,
};
