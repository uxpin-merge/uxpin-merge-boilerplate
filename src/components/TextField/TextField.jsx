import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import StyledInput from './TextField.styles';

export default class TextField extends PureComponent {
  static propTypes = {
    width: PropTypes.oneOf(['stretched', 'auto']),
    onChange: PropTypes.func,
    /**
     * @uxpinbind onChange 0.target.value
     */
    value: PropTypes.string,
  };

  static defaultProps = {
    width: 'stretched',
    onChange: () => undefined,
    value: '',
  };

  render() {
    return (<StyledInput {...this.props} type="text" />);
  }
}
