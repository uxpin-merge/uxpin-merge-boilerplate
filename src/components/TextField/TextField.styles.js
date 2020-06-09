import styled from '@emotion/styled';
import typography from '../../styles/typography.json';
import sizes from '../../styles/sizes.json';
import colors from '../../styles/colors.json';

const getWidth = (width) => {
  if (width === 'stretched') {
    return '100%';
  }

  if (width === 'auto') {
    return 'auto';
  }

  return `${width}px`;
};

export default styled.input`
    border-width: 0px;
    padding: 3px;
    border-bottom: 1px solid ${colors.silver.dark20};
    color: ${colors.gray.base};
    font-family: ${typography.fontFamily};
    font-size: ${typography.size.l}px;
    font-weight: normal;
    height: ${sizes.xxl}px;
    line-height: ${sizes.m * typography.lineHeightMultiplier.button}px;
    margin-bottom: 3px;
    min-width: 250px;
    width: ${(props) => getWidth(props.width)};
`;
