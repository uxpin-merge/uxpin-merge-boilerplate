import * as PropTypes from 'prop-types';
import * as React from 'react';
import { GridItem } from '@contentful/forma-36-react-components';


const FormaGridItem = (props) => (
  <GridItem {...props} />
);


FormaGridItem.propTypes = {

      /**
   * Child nodes to be rendered in the component */
  children: PropTypes.node,
  /**
   * one of grid-column-start css values */
  columnStart: PropTypes.string,
  /**
   * one of grid-column-end css values */
  columnEnd: PropTypes.string,
  /**
   * one of grid-column-start css values */
  rowStart: PropTypes.string,
  /**
   * one of grid-row-end css values */
  rowEnd: PropTypes.string,
  /**
   * one of grid-area css values */
  area: PropTypes.string,
  /**
   * order css property */
  order: PropTypes.number,


    // children: PropTypes.node,
    // exampleBoxes:PropTypes.string,
    //  exampleGridHeight: PropTypes.string,
    //  columns: PropTypes.object,
    //  rows: PropTypes.object,
    //  columnGap: PropTypes.oneOf([
    //     "none",
    //     "spacing2Xs",
    //     "spacingXs",
    //     "spacingS",
    //     "spacingM",
    //     "spacingL",
    //     "spacingXl",
    //     "spacing2Xl",
    //     "spacing3Xl",
    //     "spacing4Xl"
    // ]),
    // rowGap: PropTypes.oneOf([
    //     "none",
    //     "spacing2Xs",
    //     "spacingXs",
    //     "spacingS",
    //     "spacingM",
    //     "spacingL",
    //     "spacingXl",
    //     "spacing2Xl",
    //     "spacing3Xl",
    //     "spacing4Xl"
    // ]),
    // columnStart:PropTypes.string,
    // columnEnd:PropTypes.string,
    // rowStart:PropTypes.string,
    // rowEnd:PropTypes.string,
    // order:PropTypes.string,
    // area:PropTypes.string,
};



FormaGridItem.defaultProps = {

};

export { FormaGridItem as default };
