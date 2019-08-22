import styled from '@emotion/styled';
import typography from '../../styles/typography';

/* Selects the right font size based on passed props */
const sizeSelector = (size) => {
  switch (size) {
    case 'xs':
      return typography.size.xs;
    case 's':
      return typography.size.s;
    case 'm':
      return typography.size.m;
    case 'l':
      return typography.size.l;
    case 'xl':
      return typography.size.xl;
    case 'xxl':
      return typography.size.xxl;
    case 'xxxl':
      return typography.size.xxxl;
    default:
      return typography.size.m;
  }
};

// eslint-disable-next-line import/prefer-default-export
export const LinkStyles = styled('a')`
  color: #0062ff;
  font-size: ${(props) => `${sizeSelector(props.size)}px`};
  font-family: ${typography.fontFamily};
  font-weight: ${typography.weight.bold};
`;
