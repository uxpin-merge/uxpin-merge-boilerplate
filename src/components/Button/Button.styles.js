import { css } from '@emotion/core';
import styled from '@emotion/styled';
import withProps from 'recompose/withProps';
import borders from '../../styles/borders';
import colors from '../../styles/colors';
import shadow from '../../styles/shadows';
import sizes from '../../styles/sizes';
import typography from '../../styles/typography';

/* Selects the right background color based on passed props */
const backgroundSelector = (type, mode) => {
  if (!mode) {
    switch (type) {
      case 'primary':
        return colors.blue.base;
      case 'secondary':
        return colors.silver.base;
      case 'success':
        return colors.success;
      case 'error':
        return colors.error;
      case 'warning':
        return colors.warning;
      default:
        return colors.blue.base;
    }
  } else if (mode === 'active') {
    switch (type) {
      case 'primary':
        return colors.active.primary;
      case 'secondary':
        return colors.active.secondary;
      case 'success':
        return colors.active.success;
      case 'error':
        return colors.active.error;
      case 'warning':
        return colors.active.warning;
      default:
        return colors.active.default;
    }
  } else if (mode === 'hover') {
    switch (type) {
      case 'primary':
        return colors.hover.primary;
      case 'secondary':
        return colors.hover.secondary;
      case 'success':
        return colors.hover.success;
      case 'error':
        return colors.hover.error;
      case 'warning':
        return colors.hover.warning;
      default:
        return colors.hover.default;
    }
  }
};

/* Selects the right shadow for button type */
const shadowSelector = (type) => {
  switch (type) {
    case 'primary':
      return shadow.primary;
    case 'secondary':
      return shadow.box;
    case 'success':
      return shadow.success;
    case 'error':
      return shadow.error;
    case 'warning':
      return shadow.warning;
    default:
      return shadow.default;
  }
};

const borderFocusSelector = (type) => {
  switch (type) {
    case 'default':
      return colors.blue.dark15;
    case 'success':
      return colors.green.dark15;
    case 'error':
      return colors.red.dark15;
    case 'warning':
      return colors.orange.dark15;
    default:
      return colors.blue.dark15;
  }
};

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

const setIconMargin = (direction, buttonSize, label) => {
  /* If there's any label return positive margin
  ** Second index of props.children keeps
  ** the actual child string. If there are no
  ** children, 2nd index is undefined.
  ** That let's us create an icon button when
  ** there's no label
  */
  if (label[1] && label[1].length > 0) {
    if (!direction || direction === 'left') {
      switch (buttonSize) {
        case 'xs':
          return `2px ${sizes.xs}px 0 0`;
        case 's':
          return `2px ${sizes.xs}px 0 0`;
        case 'l':
          return `0 ${sizes.xs}px 0 0`;
        case 'xl':
          return `${sizes.xs}px ${sizes.xs}px 0 0 `;
        case 'xxl':
          return `${sizes.xs}px ${sizes.s}px 0 0 `;
        case 'xxxl':
          return `${sizes.s}px ${sizes.s}px 0 0 `;
        case 'm':
        default:
          return `0 ${sizes.xs}px 0 0`;
      }
    } else {
      switch (buttonSize) {
        case 'xs':
          return `2px 0 0 ${sizes.xs}px`;
        case 's':
          return `2px 0 0 ${sizes.xs}px`;
        case 'l':
          return `0 0 0 ${sizes.xs}px`;
        case 'xl':
          return `${sizes.xs}px 0 0 ${sizes.xs}px`;
        case 'xxl':
          return `${sizes.xs}px 0 0 ${sizes.s}px`;
        case 'xxxl':
          return `${sizes.s}px 0 0 ${sizes.m}px`;
        case 'm':
        default:
          return `0 0 0 ${sizes.xs}px`;
      }
    }
  } else if (!label[1] || label[1].length === 0) {
    switch (buttonSize) {
      case 'xs':
        return '-2px';
      case 's':
        return '2px';
      case 'l':
        return `${sizes.xs / 1.33}px`;
      case 'xl':
        return `${sizes.m}px`;
      case 'xxl':
        return `${sizes.xl}px`;
      case 'xxxl':
        return `${sizes.xl * 1.33}px`;
      case 'm':
      default:
        return `${sizes.xs / 3}px`;
    }
  }
};

const setPadding = (buttonSize, label) => {
  if (label[1]) {
    if (label[1].length > 0 && buttonSize === 'm' || label[1].length > 0 && buttonSize === 's' || label[1].length > 0 && buttonSize === 'xs') {
      return `0 ${sizes.l}px 0 ${sizes.l}px`;
    } if (label[1].length > 0 && buttonSize === 'l') {
      return `0 ${sizes.xl}px 0 ${sizes.xl}px`;
    } if (label[1].length > 0 && buttonSize === 'xl') {
      return `0 ${sizes.xxl * 1.5}px 0 ${sizes.xxl * 1.5}px`;
    } if (label[1].length > 0 && buttonSize === 'xxl' || label[1].length > 0 && buttonSize === 'xxxl') {
      return `0 ${sizes.xxxl * 2}px 0 ${sizes.xxxl * 2}px`;
    }
  } else if (!label[1] || label[1].length === 0) {
    return `${sizes.xs}px ${sizes.xs}px`;
  } else {
    return `${sizes.s}px ${sizes.m}px`;
  }
};

const ButtonCommon = withProps({
  createProps: (props) => props.disabled,
})(styled('button')`
  display: flex;
  flex-direction: ${(props) => (!props.iconDirection || props.iconDirection === 'left' ? 'row' : 'row-reverse')};
  align-items: center;
  justify-content: center;
  width: ${(props) => (props.stretched ? '100%' : 'auto')};
  padding: ${(props) => setPadding(props.size, props.children)};     
  border-radius: ${borders.borderRadius};
  border: ${(props) => `1px solid ${backgroundSelector(props.type)}`};
  font-family: ${typography.fontFamily};
  font-weight: ${typography.weight.bold};
  line-height: ${(props) => `${sizeSelector(props.size) * typography.lineHeightMultiplier.button}px}`};
  font-size: ${(props) => `${sizeSelector(props.size)}px`};
  &:hover {
    background-color: ${(props) => backgroundSelector(props.type, 'hover')};
    border: ${(props) => `1px solid ${backgroundSelector(props.type, 'hover')}`};
    box-shadow: ${(props) => shadowSelector(props.type)};
  }
  &:focus {
    outline: none;
    background-color: ${(props) => backgroundSelector(props.type, 'active')};
    border: ${(props) => `1px solid ${borderFocusSelector(props.type)}`};
  }
  &:active {
    background-color: ${(props) => backgroundSelector(props.type, 'active')};
    border: ${(props) => `1px solid ${backgroundSelector(props.type, 'active')}`};
    box-shadow: 'none';
  }
  &:disabled {
    background-color: ${colors.disabled.background};
    border: ${borders.borderStandard} ${colors.disabled.border};
    color: ${colors.disabled.color};
    &:hover {
      box-shadow: none;
    }
  }
  svg {
    margin: ${(props) => setIconMargin(props.iconDirection, props.size, props.children)};
    fill: white;
  }
`);


const modes = (mode, type) => {
  if (mode === 'ghost') {
    return css`
      background-color: none;
      color: ${type !== 'secondary' ? backgroundSelector(type) : colors.gray.base};
      svg {
        fill: ${type !== 'secondary' ? backgroundSelector(type) : colors.gray.base};
      }
      &:hover, &:active, &:focus {
        color: ${type !== 'secondary' ? 'white' : colors.gray.base};
        svg {
          fill: ${type !== 'secondary' ? 'white' : colors.gray.base};
        }
      }
  `;
  } if (mode === 'minimal') {
    return css`
      background-color: transparent;
      border: none;
      color: ${type !== 'secondary' ? backgroundSelector(type) : colors.gray.base};
      svg {
        fill: ${type !== 'secondary' ? backgroundSelector(type) : colors.gray.base};
      }
      &:hover {
        background: none;
        border: none;
        box-shadow: none;
        svg {
          fill: ${backgroundSelector(type, 'hover')}
        }
      }
      &:active, &:focus {
        background: none;
        border: none;
        svg {
          fill: ${backgroundSelector(type, 'active')}
        }
      }
    `;
  } if (mode === 'flat') {
    return css`
      background-color: transparent;
      border: none;
      height: ${sizes.m};
      padding: 0 ${sizes.xs}px;
      color: ${type !== 'secondary' ? backgroundSelector(type) : colors.gray.base};
      svg {
        fill: ${type !== 'secondary' ? backgroundSelector(type) : colors.gray.base};
        margin: 0;
      }
      &:hover {
        background: none;
        border: none;
        box-shadow: none;
        svg {
          fill: ${backgroundSelector(type, 'hover')}
        }
      }
      &:active, &:focus {
        background: none;
        border: none;
        svg {
          fill: ${backgroundSelector(type, 'active')}
        }
      }
    `;
  }

  return css`
      background-color: ${backgroundSelector(type)};
      color: ${type !== 'secondary' ? 'white' : colors.gray.base};
    `;
};

const ButtonStyles = styled(ButtonCommon)`
  ${(props) => modes(props.mode, props.type)};
`;


export default ButtonStyles;
