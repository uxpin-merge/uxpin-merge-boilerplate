/** @jsx jsx */
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';
import React from 'react';
import {
  Crosshair,
  Hint,
  HorizontalGridLines,
  MarkSeries,
  VerticalGridLines,
  XAxis,
  XYPlot,
  YAxis,
} from 'react-vis';
import ChartStyles from '../chartStyles/chart.styles';

export default class MarkChart extends React.Component {
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
          <MarkSeries
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
            <MarkSeries
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
MarkChart.propTypes = {
  /** Height of the Chart in px. Accepts only numbers. */
  height: PropTypes.number,
  /** Width of the Chart in px. Accepts only numbers. */
  width: PropTypes.number,
  /** Turns, on/off animation and allows for selection of different types of animations. */
  animation: PropTypes.oneOf([false, 'noWobble', 'gentle', 'wobbly', 'stiff']),
  /**
   * Color to be used on all chart lines, unless colorRange is provided
   * @uxpinpropname Stroke color
   */
  color: PropTypes.string,
  /**
   * Specifies opacity for all the chart lines, unless styles array is provided
   * @uxpinpropname Stroke opacity
   */
  opacity: PropTypes.string,
  /** Specifies width of the line for all the chart lines, unless styles array is provided */
  strokeWidth: PropTypes.number,
  /** @uxpinignoreprop */
  colorRange: PropTypes.arrayOf(PropTypes.string),
  /**
   * Turns on/off crossHair
   * @uxpindescription Turns on/off crossHair (only in prototype preview)
   */
  crossHair: PropTypes.bool,
  /** Data Array. Structure: [[{"x": 0, "y": 1}, {"x": 1, "y": 3}], [{"x: 0", "y": 2}, {"x": 1, "y": 3]].  */
  data: PropTypes.array,
  /** Color filling inside of every circle on the chart */
  fill: PropTypes.string,
  /**
   * Range of colors to be used as a filling
   * @uxpinignoreprop
   */
  fillRange: PropTypes.arrayOf(PropTypes.string),
  /** @uxpinignoreprop */
  hint: PropTypes.bool,
  /** Turns on/off horizontal grid lines. */
  horizontalGridLines: PropTypes.bool,
  /** Turns on/off vertical grid lines. */
  verticalGridLines: PropTypes.bool,
  /** Sets margin for the chart inside of the container. Format: {"top": 0, "right": 0, "bottom": 0, "left": 0 } */
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
  /** Starting point for data set. Used for triggering animation. Same data structure as data property. */
  startData: PropTypes.array,
  /** Object with styles that allows for specifying styles for every line separtely. Accepts: StrokeStyle, StrokeWidth and Opacity. Format: [{"strokeStyle": "solid"}] */
  styles: PropTypes.arrayOf(PropTypes.object),
  /** Title for the horizontal label. */
  xAxisTitle: PropTypes.string,
  /** Turns on/off horizontal labels. */
  xLabels: PropTypes.bool,
  /** Type of the scale for X axis. Linear allows only for numbers, Ordinal let's you specify x axis as text e.g. "Q1" */
  xScaleType: PropTypes.oneOf(['linear', 'ordinal']),
  /** Title for the vertical label. */
  yAxisTitle: PropTypes.string,
  /** Turns on/off vertical labels. */
  yLabels: PropTypes.bool,
  /** Type of the scale for Y axis. Linear allows only for numbers, Ordinal let's you specify x axis as text e.g. "Q1" */
  yScaleType: PropTypes.oneOf(['linear', 'ordinal']),
};
/* eslint-enable sort-keys */

MarkChart.defaultProps = {
  crossHair: false,
  height: 300,
  hint: false,
  horizontalGridLines: true,
  opacity: '0.6',
  verticalGridLines: true,
  width: 300,
  xLabels: true,
  yLabels: true,
};
