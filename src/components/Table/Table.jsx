import PropTypes from 'prop-types';
import React from 'react';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import {
  BodyCellStyles,
  BodyCellStylesNone,
  BodyRowStyles,
  HeaderCellStyles,
  HeaderCellWrapper,
  HeaderRowStyles,
  SortingStyles,
  TableStyles,
} from './Table.styles';

export default class Table extends React.Component {
  static getDerivedStateFromProps(props) {
    return {
      body: props.data.body,
      header: props.data.header,
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      body: this.props.data.body,
      header: this.props.data.header,
    };
  }

  sortData(event, sorter, key) {
    if (sorter === 'az') {
      const sorted = this.state.body.sort((a, b) => {
        if (a[key] < b[key]) {
          return -1;
        }
        if (a[key] > b[key]) {
          return 1;
        }
        return 0;
      });
      this.setState({ body: sorted });
    } else if (sorter === 'za') {
      const sorted = this.state.body.sort((a, b) => {
        if (a[key] > b[key]) {
          return -1;
        }
        if (a[key] < b[key]) {
          return 1;
        }
        return 0;
      });
      this.setState({ body: sorted });
    }
  }

  render() {
    return (
      <TableStyles {...this.props}>
        <thead>
          <HeaderRowStyles>
            {this.state.header.map((item, i) => (
              <HeaderCellStyles key={i}>
                <HeaderCellWrapper>
                  {item}
                  <SortingStyles>
                    <Button
                      mode="flat"
                      type="secondary"
                      size="s"
                      stretched={false}
                      icon={<Icon icon="ChevronSvg" size="xs" color="#f6f6f6" />}
                      onClick={(e) => this.sortData(e, 'za', item)}
                    />
                    <Button
                      mode="flat"
                      type="secondary"
                      size="s"
                      stretched={false}
                      icon={<Icon icon="ChevronSvg" size="xs" />}
                      onClick={(e) => this.sortData(e, 'az', item)}
                    />
                  </SortingStyles>
                </HeaderCellWrapper>
              </HeaderCellStyles>
            ))}
          </HeaderRowStyles>
        </thead>
        <tbody>
          {this.state.body.map(
            (item, i) => (
              <BodyRowStyles key={i}>
                {this.props.data.header.map((elem, e) => (item[elem] ? (
                  <BodyCellStyles key={e}>{item[elem]}</BodyCellStyles>
                ) : (
                  <BodyCellStylesNone key={e}>none</BodyCellStylesNone>
                )))}
              </BodyRowStyles>
            )
          )}
        </tbody>
      </TableStyles>
    );
  }
}


Table.propTypes = {
  data: PropTypes.shape({
    body: PropTypes.array,
    header: PropTypes.arrayOf(PropTypes.string),
  }),
  width: PropTypes.oneOf(['stretched', 'auto']),
};

Table.defaultProps = {
  width: 'stretched',
};
