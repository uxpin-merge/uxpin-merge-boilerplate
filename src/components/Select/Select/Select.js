import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Button/Button';
import Icon from '../../Icon/Icon';
import {
  ItemStyles, MenuStyles, SelectContainerStyles, SelectContent, SelectStyles,
} from './Select.styles';

export default class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: this.props.defaultOpen, content: this.props.placeholder };
    this.toggleList = this.toggleList.bind(this);
  }

  selectItem(content, id) {
    this.setState({
      content,
      open: false,
      selected: id,
    });
  }

  toggleList() {
    this.setState((prevState) => ({
      open: !prevState.open,
    }));
  }

  restartSelect(e) {
    e.stopPropagation();
    this.setState({ content: this.props.placeholder, open: false, selected: '' });
  }

  render() {
    return (
      <SelectContainerStyles {...this.props}>
        <SelectStyles onClick={this.toggleList} {...this.props}>
          <SelectContent>
            {this.state.content}
          </SelectContent>
          {this.state.content !== this.props.placeholder
            ? (
              <Button
                mode="minimal"
                type="error"
                size="s"
                stretched={false}
                icon={<Icon icon="ActionCloseSvg" size="xs" color="#444" />}
                onClick={(e) => {
                  this.restartSelect(e);
                  this.props.onRestart();
                }}
              />
            )
            : ''}
          <Icon icon="ChevronSvg" color="#444" />
        </SelectStyles>
        {this.state.open
          ? (
            <MenuStyles {...this.props}>
              {React.Children.map(this.props.children, (item, i) => {
                const option = item.props.children;
                return (
                  <ItemStyles
                    id={`${i}listItem`}
                    active={this.state.selected}
                    onClick={() => {
                      this.selectItem(option, i);
                      this.props.onSelect();
                    }}
                    {...this.props}>
                    {item}
                  </ItemStyles>
                );
              })}
            </MenuStyles>
          ) : ''}
      </SelectContainerStyles>
    );
  }
}

Select.propTypes = {
  children: PropTypes.node,
  width: PropTypes.oneOf(['stretched', 'auto']),
  defaultOpen: PropTypes.bool,
  placeholder: PropTypes.string,
  onSelect: PropTypes.func,
  onRestart: PropTypes.func,
};

Select.defaultProps = {
  placeholder: 'Select...',
  defaultOpen: false,
  width: 'stretched',
};
