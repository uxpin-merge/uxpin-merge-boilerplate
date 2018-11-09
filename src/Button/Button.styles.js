import styled from "react-emotion";
import {css} from "emotion";
import withProps from "recompose/withProps";
import * as colors from "../styles/colors.json";
import * as borders from "../styles/borders.json";
import * as shadow from "../styles/shadows.json";
import * as typography from "../styles/typography.json";
import * as size from "../styles/sizes.json";

/* Selects the right background color based on passed props */
const backgroundSelector = (type, mode) => {
  if (!mode) {
    switch (type) {
      case "primary":
        return colors.blue.base;
      case "secondary": 
        return colors.silver.base;
      case "success":
        return colors.success;
      case "error":
        return colors.error;
      case "warning":
        return colors.warning;
      default:
        return colors.blue.base;
        break;
    }
  } else if (mode === "active") {
    switch (type) {
      case "primary":
        return colors.active.primary;
      case "secondary":
        return colors.active.secondary
      case "success":
        return colors.active.success;
      case "error":
        return colors.active.error;
      case "warning":
        return colors.active.warning;
      default:
        return colors.active.default;
        break;
    }
  } else if (mode === "hover") {
    switch (type) {
      case "primary":
        return colors.hover.primary;
      case "secondary": 
        return colors.hover.secondary;
      case "success":
        return colors.hover.success;
      case "error":
        return colors.hover.error;
      case "warning":
        return colors.hover.warning;
      default:
        return colors.hover.default;
        break;
    }
  }
};

/* Selects the right shadow for button type */
const shadowSelector = type => {
  switch (type) {
    case "primary":
      return shadow.primary;
    case "secondary":
      return shadow.box;
    case "success":
      return shadow.success;
    case "error":
      return shadow.error;
    case "warning":
      return shadow.warning;
    default:
      return shadow.default;
      break;
  }
}

const borderFocusSelector = type => {
  switch (type) {
    case "default":
      return colors.blue.dark15;
    case "success":
      return colors.green.dark15;
    case "error":
      return colors.red.dark15;
    case "warning":
      return colors.orange.dark15;
    default:
      return colors.blue.dark15;
      break;
  }
}

/* Selects the right font size based on passed props */
const sizeSelector = size => {
  switch (size) {
    case "xs":
      return typography.size.xs;
    case "s":
      return typography.size.s;
    case "m":
      return typography.size.m;
    case "l":
      return typography.size.l;
    case "xl":
      return typography.size.xl;
    case "xxl":
      return typography.size.xxl;
    case "xxxl":
      return typography.size.xxxl;
    default:
      return typography.size.m;
      break;
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
    if(label[2]) {
      if(direction === "left") {
        switch(buttonSize){
          case "xs":
            return `2px ${size.xs}px 0 0`;
          case "s":
            return `2px ${size.xs}px 0 0`;
          case "m":
            return `0 ${size.xs}px 0 0`;
          case "l":
            return `0 ${size.xs}px 0 0`;
          case "xl":
            return `${size.xs}px ${size.xs}px 0 0 `;
          case "xxl":
            return `${size.xs}px ${size.s}px 0 0 `;
          case "xxxl":
            return `${size.s}px ${size.s}px 0 0 `;
        }     
      }     
    else{
      switch(buttonSize){
        case "xs":
          return `2px 0 0 ${size.xs}px`;
        case "s":
          return `2px 0 0 ${size.xs}px`;
        case "m":
          return `0 0 0 ${size.xs}px`;
        case "l":
          return `0 0 0 ${size.xs}px`;
        case "xl":
          return `${size.xs}px 0 0 ${size.xs}px`;
        case "xxl":
          return `${size.xs}px 0 0 ${size.s}px`;
        case "xxxl":
          return `${size.s}px 0 0 ${size.s}px`;
      }     
    }
  }
  else {
    switch(buttonSize){
      case "xs":
        return `${size.xs/2}px -${size.xs}px ${size.xs/2}px -${size.xs}px `;
      case "s":
        return `${size.xs}px -${size.xs}px ${size.xs}px -${size.xs}px `;
      case "m":
        return `${size.xs/4}px`;
      case "l":
        return `${size.xs/4}px`;
      case "xl":
        return `${size.m}px`;
      case "xxl":
        return `${size.l}px`;
      case "xxxl":
        return `${size.xl}px`;
    }     
  }
}

const setPadding = (buttonSize, label) => {
  if(label[2] && buttonSize === "m" || buttonSize === "s" || buttonSize === "xs") {
    return `0 ${size.l}px 0 ${size.l}px`;
  }
  else if(label[2] && buttonSize === "l") {
    return `0 ${size.xl}px 0 ${size.xl}px`;
  }
  else if(label[2] && buttonSize === "xl") {
    return `0 ${size.xxl}px 0 ${size.xxl}px`;
  }
  else if(label[2] && buttonSize === "xxl" || buttonSize === "xxxl") {
    return `0 ${size.xxxl}px 0 ${size.xxxl}px`;
  }
  else if(!label[2] && buttonSize !== "l") {
    return `${size.xs}px ${size.xs}px`;
  }
  else {
    return `${size.s}px ${size.m}px`;
  }
}

const ButtonCommon = withProps({
  createProps: props => this.props.isDisabled
})(styled("button")`
  display: flex;
  flex-direction: ${props => props.iconDirection === "left" ? "row" : "row-reverse"};
  align-items: center;
  justify-content: center;
  width: ${props => props.stretched ? "100%" : "auto"};
  padding: ${props => setPadding(props.size, props.children)};        
  border-radius: ${borders.borderRadius};
  border: ${props => `1px solid ${backgroundSelector(props.type)}`};
  font-family: ${typography.fontFamily};
  font-weight: ${typography.weight.bold};
  line-height: ${props => `${sizeSelector(props.size) * typography.lineHeightMultiplier.button}px}`};
  font-size: ${props => `${sizeSelector(props.size)}px`};
  &:hover {
    background-color: ${props => backgroundSelector(props.type, "hover")};
    border: ${props => `1px solid ${backgroundSelector(props.type, "hover")}`};
    box-shadow: ${props => shadowSelector(props.type)};
  }
  &:focus {
    outline: none;
    background-color: ${props => backgroundSelector(props.type, "active")};
    border: ${props => `1px solid ${borderFocusSelector(props.type)}`};
  }
  &:active {
    background-color: ${props => backgroundSelector(props.type, "active")};
    border: ${props => `1px solid ${backgroundSelector(props.type, "active")}`};
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
    margin: ${props => setIconMargin(props.iconDirection, props.size, props.children)};
    fill: white;
  }
`);


const modes = (mode, type) => {
  if(mode === "ghost") {
    return css`
      background-color: none;
      color: ${ type !== "secondary" ? backgroundSelector(type) : colors.gray.base};
      svg {
        fill: ${ type !== "secondary" ? backgroundSelector(type) : colors.gray.base};
      }
      &:hover, &:active, &:focus {
        color: ${type !== "secondary" ? "white" : colors.gray.base};
        svg {
          fill: ${type !== "secondary" ? "white" : colors.gray.base};
        }
      }
  ` 
  }
  else if(mode === "minimal") {
    return css`
      background-color: transparent;
      border: none;
      color: ${ type !== "secondary" ? backgroundSelector(type) : colors.gray.base};
      svg {
        fill: ${ type !== "secondary" ? backgroundSelector(type) : colors.gray.base};
      }
      &:hover {
        background: none;
        border: none;
        box-shadow: none;
        svg {
          fill: ${backgroundSelector(type, "hover")}
        }
      }
      &:active, &:focus {
        background: none;
        border: none;
        svg {
          fill: ${backgroundSelector(type, "active")}
        }
      }
    `;
  }
  else if(mode === "flat") {
    return css`
      background-color: transparent;
      border: none;
      height: ${size.m};
      padding: 0 ${size.xs}px;
      color: ${ type !== "secondary" ? backgroundSelector(type) : colors.gray.base};
      svg {
        fill: ${ type !== "secondary" ? backgroundSelector(type) : colors.gray.base};
        margin: 0;
      }
      &:hover {
        background: none;
        border: none;
        box-shadow: none;
        svg {
          fill: ${backgroundSelector(type, "hover")}
        }
      }
      &:active, &:focus {
        background: none;
        border: none;
        svg {
          fill: ${backgroundSelector(type, "active")}
        }
      }
      
    `;
  }
  else {
    return css`
      background-color: ${backgroundSelector(type)};
      color: ${type !== "secondary" ? "white" : colors.gray.base};
    `
  }
}

const ButtonStyles = styled(ButtonCommon)`
  ${props => modes(props.mode, props.type)};
`;


export default ButtonStyles;
