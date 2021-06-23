import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Grid } from '@contentful/forma-36-react-components';


const FormaGrid = (props) => (
    <Grid {...props} />
);


FormaGrid.propTypes = {
    /**
    * @uxpinignoreprop
    * */
    exampleBoxes: PropTypes.string,
    /**
    * @uxpinignoreprop
    * */
    exampleGridHeight: PropTypes.string,
    /**
    * The number of grid columns (width will be equal)
    * or width of each column. Example: "100px, 200px"
    * */
    columns: PropTypes.object,

    /**
    * The number of grid rows (height will be equal)
    * or height of each row. Example: "100px, 200px"
    * */
    rows: PropTypes.object,

    /**
    * Spaces between rows, corresponds to of spacing tokens values */
    columnGap: PropTypes.oneOf([
        "none",
        "spacing2Xs",
        "spacingXs",
        "spacingS",
        "spacingM",
        "spacingL",
        "spacingXl",
        "spacing2Xl",
        "spacing3Xl",
        "spacing4Xl"
    ]),

    /**
     * Spaces between columns, corresponds to of spacing tokens values */
    rowGap: PropTypes.oneOf([
        "none",
        "spacing2Xs",
        "spacingXs",
        "spacingS",
        "spacingM",
        "spacingL",
        "spacingXl",
        "spacing2Xl",
        "spacing3Xl",
        "spacing4Xl"
    ]),

    /**
    * One of grid-auto-flow css values */
    flow: PropTypes.oneOf([
        "-moz-initial", "inherit", "initial", "revert", "unset", "column", "dense", "row"
    ]),

    /**
     * Child nodes to be rendered in the component 
     * @uxpinignoreprop */
    children: PropTypes.node,

    /**
    * One of justify-content css values */
    justifyContent: PropTypes.oneOf([
        "space-around", "space-between", "space-evenly", "stretch", "center", "end", "flex-end", "flex-start", "start", "left", "normal", "right"
    ]),

    /**
    * One of justify-content css values */
    alignContent: PropTypes.oneOf([
        "space-around", "space-between", "space-evenly", "stretch", "center", "end", "flex-end", "flex-start", "start", "baseline", "normal"
    ]),
    
    /**
    * Sets display:inline-grid */
    inline: PropTypes.bool,
};



FormaGrid.defaultProps = {

};

export { FormaGrid as default };
