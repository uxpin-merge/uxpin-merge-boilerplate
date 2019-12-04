/** @jsx jsx */
import { jsx } from '@emotion/core';
import {
  curveBundle,
  curveCardinal,
  curveCardinalClosed,
  curveCardinalOpen,
  curveCatmullRom,
  curveCatmullRomClosed,
  curveCatmullRomOpen,
} from 'd3-shape';
import PropTypes from 'prop-types';
import React from 'react';
import {
  Crosshair,
  Hint,
  HorizontalGridLines,
  LineMarkSeries,
  VerticalGridLines,
  XAxis,
  XYPlot,
  YAxis,
} from 'react-vis';
import ChartStyles from '../chartStyles/chart.styles';

export default class LineMarkChart extends React.Component {
  constructor(props) {
    super(props);

    const getStartData = () => {
      if (Array.isArray(this.props.startData[0]) && this.props.startData.length === this.props.data.length) {
        return this.props.startData;
      } if (!Array.isArray(this.props.startData[0]) && this.props.startData.length === this.props.data.length) {
        return this.props.startData;
      }

      return this.props.data;
    };

    this.state = {
      crosshairValues: [],
      data: this.props.startData ? getStartData() : this.props.data,
      hintValue: '',
      showHint: false,
    };
  }

  componentDidMount() {
    this.setState({ data: this.props.data });
  }

  getCrosshair(value, { index }) {
    this.setState({ crosshairValues: this.state.data.map((d) => d[index]) });
  }

  restartCrosshair() {
    this.setState({ crosshairValues: [] });
  }

  getHint(value) {
    if (!this.state.showHint) {
      this.setState({ hintValue: value, showHint: true });
    } else {
      this.setState({ hintValue: '', showHint: false });
    }
  }

  render() {
    const curve = (type) => {
      switch (type) {
        case 'curveNatural':
          return type;
        case 'curveBasis':
          return type;
        case 'curveBasisClosed':
          return type;
        case 'curveLinear':
          return type;
        case 'curveLinearClosed':
          return type;
        case 'curveMonotoneX':
          return type;
        case 'curveMonotoneY':
          return type;
        case 'curveStep':
          return type;
        case 'curveStepAfter':
          return type;
        case 'curveStepBefore':
          return type;
        case 'curveCatmullRom':
          return curveCatmullRom.alpha(
            parseFloat(this.props.curveCatmullRomAlpha)
          );
        case 'curveCatmullRomClosed':
          return curveCatmullRomClosed.alpha(
            parseFloat(this.props.curveCatmullRomAlpha)
          );
        case 'curveCatmullRomOpen':
          return curveCatmullRomOpen.alpha(
            parseFloat(this.props.curveCatmullRomAlpha)
          );
        case 'curveBundle':
          return curveBundle.beta(parseFloat(this.props.curveBundleBeta));
        case 'curveCardinal':
          return curveCardinal.tension(
            parseFloat(this.props.curveCardinalTension)
          );
        case 'curveCardinalOpen':
          return curveCardinalOpen.tension(
            parseFloat(this.props.curveCardinalTension)
          );
        case 'curveCardinalClosed':
          return curveCardinalClosed.tension(
            parseFloat(this.props.curveCardinalTension)
          );
        case 'no curve':
        default:
          return '';
      }
    };
    return (
      <XYPlot
        height={this.props.height}
        width={this.props.width}
        css={ChartStyles}
        onMouseLeave={() => this.restartCrosshair()}
        xType={this.props.xScaleType}
        yType={this.props.yScaleType}
        margin={this.props.margin}>
        {this.props.verticalGridLines ? <VerticalGridLines /> : undefined}
        {this.props.horizontalGridLines ? <HorizontalGridLines /> : undefined}
        {this.props.xLabels ? <XAxis title={this.props.xAxisTitle} /> : undefined}
        {this.props.yLabels ? <YAxis title={this.props.yAxisTitle} /> : undefined}
        {!Array.isArray(this.props.data[0]) ? (
          <LineMarkSeries
            data={this.state.data}
            color={
              this.props.colorRange !== undefined && this.props.colorRange[0]
                ? this.props.colorRange[0]
                : this.props.color
            }
            fill={
              this.props.fillRange !== undefined && this.props.fillRange[0]
                ? this.props.fillRange[0]
                : this.props.fill
            }
            size={this.props.size}
            curve={curve(this.props.curve)}
            opacity={
              this.props.styles !== undefined
              && this.props.styles[0]
              && this.props.styles[0].opacity
                ? parseFloat(this.props.styles[0].opacity)
                : parseFloat(this.props.opacity)
            }
            strokeWidth={
              this.props.styles !== undefined
              && this.props.styles[0]
              && this.props.styles[0].strokeWidth
                ? this.props.styles[0].strokeWidth
                : this.props.strokeWidth
            }
            strokeStyle={
              this.props.styles !== undefined
              && this.props.styles[0]
              && this.props.styles[0].strokeStyle
                ? this.props.styles[0].strokeStyle
                : this.props.strokeStyle
            }
            onValueClick={(value) => this.getHint(value)}
            onNearestX={(value, index) => this.getCrosshair(value, index)}
            onNearestXY={this.props.onNearestXY}
            onSeriesClick={this.props.onSeriesClick}
            onSeriesRightClick={this.props.onSeriesRightClick}
            onSeriesMouseOver={this.props.onSeriesMouseOver}
            onSeriesMouseOut={this.props.onSeriesMouseOver}
            animation={this.props.animation}
          />
        ) : (
          this.state.data.map((e, i) => (
            <LineMarkSeries
              key={i}
              data={this.state.data[i]}
              color={
                  this.props.colorRange !== undefined
                  && this.props.colorRange[i]
                    ? this.props.colorRange[i]
                    : this.props.color
                }
              fill={
                  this.props.fillRange !== undefined
                  && this.props.fillRange[i]
                    ? this.props.fillRange[i]
                    : this.props.fill
                }
              size={this.props.size}
              curve={curve(this.props.curve)}
              opacity={
                  this.props.styles !== undefined
                  && this.props.styles[i]
                  && this.props.styles[i].opacity
                    ? parseFloat(this.props.styles[i].opacity)
                    : parseFloat(this.props.opacity)
                }
              strokeWidth={
                  this.props.styles !== undefined
                  && this.props.styles[i]
                  && this.props.styles[i].strokeWidth
                    ? this.props.styles[i].strokeWidth
                    : this.props.strokeWidth
                }
              strokeStyle={
                  this.props.styles !== undefined
                  && this.props.styles[i]
                  && this.props.styles[i].strokeStyle
                    ? this.props.styles[i].strokeStyle
                    : this.props.strokeStyle
                }
              onValueClick={(value) => this.getHint(value)}
              onNearestX={(value, index) => this.getCrosshair(value, index)}
              onNearestXY={this.props.onNearestXY}
              onSeriesClick={this.props.onSeriesClick}
              onSeriesRightClick={this.props.onSeriesRightClick}
              onSeriesMouseOver={this.props.onSeriesMouseOver}
              onSeriesMouseOut={this.props.onSeriesMouseOver}
              animation={this.props.animation}
            />
          ))
        )}
        {this.props.crossHair ? (
          <Crosshair values={this.state.crosshairValues} />
        ) : (
          undefined
        )}
        {this.props.hint && this.state.showHint ? (
          <Hint value={this.state.hintValue} />
        ) : (
          undefined
        )}
      </XYPlot>
    );
  }
}

/* eslint-disable sort-keys */
LineMarkChart.propTypes = {
  /** Height of the Chart in px. Accepts only numbers. */
  height: PropTypes.number,
  /** Width of the Chart in px. Accepts only numbers. */
  width: PropTypes.number,
  /** Turns, on/off animation and allows for selection of different types of animations. */
  animation: PropTypes.oneOf([false, 'noWobble', 'gentle', 'wobbly', 'stiff']),
  /** Color to be used on all chart lines, unless colorRange is provided */
  color: PropTypes.string,
  /**
   * Array with colors to be used across all chart lines. If array doesn't specify color for all the chart lines, color property is used.
   * @uxpinignoreprop
   */
  colorRange: PropTypes.arrayOf(PropTypes.string),
  /**
   * Turns on/off crossHair
   * @uxpindescription Turns on/off crossHair (only in prototype preview)
   */
  crossHair: PropTypes.bool,
  /** Select the kind of curve for all the chart lines */
  curve: PropTypes.oneOf([
    'no curve',
    'curveNatural',
    'curveBasis',
    'curveBasisClosed',
    'curveLinear',
    'curveLinearClosed',
    'curveMonotoneX',
    'curveMonotoneY',
    'curveStep',
    'curveStepAfter',
    'curveStepBefore',
    'curveCatmullRom',
    'curveCatmullRomOpen',
    'curveCatmullRomClosed',
    'curveBundle',
    'curveCardinal',
    'curveCardinalOpen',
    'curveCardinalClosed',
  ]),
  /**
   * Additional param to modify the curvature of curveBundleBeta
   * @uxpinignoreprop
   */
  curveBundleBeta: PropTypes.string,
  /**
   * Additional param to modify the curvature of curveCardinal, curveCardinalOpen, curveCardinalClosed
   * @uxpinignoreprop
   */
  curveCardinalTension: PropTypes.string,
  /**
   * Additional param to modify the curvature of curveCatmullRom, curveCatmullRomOpen and curveCatmullRomClosed
   * @uxpinignoreprop
   */
  curveCatmullRomAlpha: PropTypes.string,
  /** Data Array. Structure: [[{"x": 0, "y": 1}, {"x": 1, "y": 3}], [{"x: 0", "y": 2}, {"x": 1, "y": 3]].  */
  data: PropTypes.array,
  /**
   * Range of colors to be used as a filling
   * @uxpinignoreprop
   */
  fillRange: PropTypes.arrayOf(PropTypes.string),
  hint: PropTypes.bool,
  /** Turns on/off horizontal grid lines. */
  horizontalGridLines: PropTypes.bool,
  /** Turns on/off vertical grid lines. */
  verticalGridLines: PropTypes.bool,
  /**
   * Sets margin for the chart inside of the container. Format: {"top": 0, "right": 0, "bottom": 0, "left": 0 }
   * @uxpinignoreprop
   */
  margin: PropTypes.shape({
    bottom: PropTypes.number,
    left: PropTypes.number,
    right: PropTypes.number,
    top: PropTypes.number,
  }),
  /**
   * @uxpinignoreprop
   */
  onNearestXY: PropTypes.func,
  /**
   * @uxpinignoreprop
   */
  onSeriesClick: PropTypes.func,
  /**
   * @uxpinignoreprop
   */
  // eslint-disable-next-line react/no-unused-prop-types
  onSeriesMouseOut: PropTypes.func,
  /**
   * @uxpinignoreprop
   */
  onSeriesMouseOver: PropTypes.func,
  /**
   * @uxpinignoreprop
   */
  onSeriesRightClick: PropTypes.func,
  /** Specifies opacity for all the chart lines, unless styles array is provided */
  opacity: PropTypes.string,
  /**
   * Size of marks on the chart
   * @uxpinpropname Mark size
   */
  size: PropTypes.number,
  /**
   * Color filling inside of every circle on the chart
   * @uxpinpropname Mark fill
   */
  fill: PropTypes.string,
  /** Starting point for data set. Used for triggering animation. Same data structure as data property. */
  startData: PropTypes.array,
  /** Specifies style of the line for all the chart lines, unless styles array is provided */
  strokeStyle: PropTypes.oneOf(['solid', 'dashed']),
  /** Specifies width of the line for all the chart lines, unless styles array is provided */
  strokeWidth: PropTypes.number,
  /** Object with styles that allows for specifying styles for every line separtely. Accepts: StrokeStyle, StrokeWidth and Opacity. Format: [{"strokeStyle": "solid"}] */
  styles: PropTypes.arrayOf(PropTypes.object),
  /** Horizontal label (x axis) */
  xAxisTitle: PropTypes.string,
  /**
   * Turns on/off horizontal labels.
   * @uxpinpropname Show X labels
   */
  xLabels: PropTypes.bool,
  /** Type of the scale for X axis. Linear allows only for numbers, Ordinal let's you specify x axis as text e.g. "Q1" */
  xScaleType: PropTypes.oneOf(['linear', 'ordinal']),
  /** Vertical label (y axis) */
  yAxisTitle: PropTypes.string,
  /**
   * Turns on/off vertical labels.
   * @uxpinpropname Show Y labels
   */
  yLabels: PropTypes.bool,
  /** Type of the scale for Y axis. Linear allows only for numbers, Ordinal let's you specify x axis as text e.g. "Q1" */
  yScaleType: PropTypes.oneOf(['linear', 'ordinal']),
};
/* eslint-enable sort-keys */

LineMarkChart.defaultProps = {
  crossHair: false,
  curve: 'curveNatural',
  height: 300,
  hint: false,
  horizontalGridLines: true,
  opacity: '0.6',
  size: 5,
  strokeWidth: 3,
  verticalGridLines: true,
  width: 300,
  xLabels: true,
  yLabels: true,
};
