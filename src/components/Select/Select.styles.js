import styled from '@emotion/styled';
import colors from '../../styles/colors';
import shadows from '../../styles/shadows';
import sizes from '../../styles/sizes';
import typography from '../../styles/typography';

const getWidth = (width) => {
  if (width === 'stretched') {
    return '100%';
  }

  if (width === 'auto') {
    return 'auto';
  }

  return `${width}px`;
};

const SelectContainerStyles = styled('div')`
    width: ${(props) => getWidth(props.width)};
    font-family: ${typography.fontFamily};
    font-weight: normal;
    font-size: ${typography.size.l}px;
    line-height: ${sizes.m * typography.lineHeightMultiplier}px;
    color: ${colors.gray.base};
`;

const SelectStyles = styled('div')`
    display: inline-flex;
    flex: 1 0 auto;
    align-items: center;
    justify-content: space-between;
    width: ${(props) => getWidth(props.width)};
    min-width: 250px;
    height: ${sizes.xxl}px;
    margin-bottom: 3px;
    border-bottom: 1px solid ${colors.silver.dark20};

    button {
      margin-left: auto;
    }
    svg {
      min-width: fit-content;
    }
`;

const SelectContent = styled('div')`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    cursor: pointer;
`;

const MenuStyles = styled('ul')`
    position: absolute;
    display: flex;
    flex-direction: column;
    left: 0;
    width: ${(props) => getWidth(props.width)};
    min-width: 250px;
    margin: 1px 0;
    padding: ${sizes.s}px 0 ${sizes.s}px 0;
    background: white;
    box-shadow: ${shadows.box};
    list-style: none;
`;

const ItemStyles = styled('li')`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    width: inherit;
    height: ${sizes.xxl}px;
    padding: 0 ${sizes.m}px;
    background-color: ${(props) => (props.id === `${props.active}listItem` ? colors.silver.light1 : 'white')};
    cursor: pointer;
    &:hover {
        background-color: ${colors.silver.light1};
    }
    span {
        max-width: 90%;
        overflow: hidden;
        white-space: nowrap;
        text-align: center;
        text-overflow: ellipsis;
    }
`;

export {
  SelectStyles, MenuStyles, ItemStyles, SelectContainerStyles, SelectContent,
};
