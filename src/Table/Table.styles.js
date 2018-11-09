import styled from "react-emotion";
import {css} from "emotion";
import * as colors from "../styles/colors.json";
import * as borders from "../styles/borders.json";
import * as shadow from "../styles/shadows.json";
import * as typography from "../styles/typography.json";
import * as size from "../styles/sizes.json";

const TableStyles = styled('table')`
    display: table;
    table-layout: fixed;
    width: ${props => props.width === "stretched" ? "100%" : "auto"};
    box-shadow: ${shadow.box};
    border: ${borders.borderStandard} ${colors.silver.base};
    font-family: ${typography.lineHeightMultiplier};
    font-size: ${typography.size.m};
    color: ${colors.gray.base};
    text-transform: capitalize;
`;

const HeaderRowStyles = styled('tr')`
    display: table-row;
    overflow: hidden;
    padding: ${size.m}px;
`;

const HeaderCellStyles = styled('th')`
    display: table-cell;
    width: auto;
    padding: ${size.m}px;
`;

const HeaderCellWrapper = styled('div')`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;
`;

const SortingStyles = styled('div')`
    button:first-of-type {
        svg {
            transform: rotate(180deg);
        }
    }
`;

const BodyRowStyles = styled('tr')`
    display: table-row;
`;

const BodyCellStyles = styled('td')`
    display: table-cell;
    width: auto;
    padding: ${size.m}px;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const BodyCellStylesNone = styled(BodyCellStyles)`
    font-style: italic;
    color: ${colors.gray.light30};
`;

export { BodyCellStyles, BodyCellStylesNone, BodyRowStyles, HeaderCellStyles, HeaderCellWrapper, HeaderRowStyles, SortingStyles, TableStyles };