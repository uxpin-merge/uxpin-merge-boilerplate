import React from 'react';
import PropTypes from 'prop-types';
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  VerticalBarSeries,
  Crosshair,
  Hint,
} from 'react-vis';
import BarChartStyles from './BarChart.styles';

export default class BarChart extends React.Component {
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
      data: this.props.startData ? getStartData() : this.props.data,
      crosshairValues: [],
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
      this.setState({ showHint: true, hintValue: value });
    } else {
      this.setState({ showHint: false, hintValue: '' });
    }
  }

  render() {
    return (
      <XYPlot
        height={this.props.height}
        width={this.props.width}
        className={BarChartStyles}
        onMouseLeave={() => this.restartCrosshair()}
        xType={this.props.xScaleType}
        yType={this.props.yScaleType}
        margin={this.props.margin}>
        {this.props.verticalGridLines ? <VerticalGridLines /> : undefined}
        {this.props.horizontalGridLines ? <HorizontalGridLines /> : undefined}
        {this.props.xLabels ? <XAxis title={this.props.xAxisTitle} /> : undefined}
        {this.props.yLabels ? <YAxis title={this.props.yAxisTitle} /> : undefined}
        {!Array.isArray(this.props.data[0]) ? (
          <VerticalBarSeries
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
            stroke={this.props.stroke}
            barWidth={parseFloat(this.props.barWidth)}
            cluster={
              this.props.styles !== undefined
              && this.props.styles[0]
              && this.props.styles[0].cluster
                ? this.props.styles[0].cluster
                : ''
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
            <VerticalBarSeries
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
              stroke={this.props.stroke}
              barWidth={parseFloat(this.props.barWidth)}
              cluster={
                  this.props.styles !== undefined
                  && this.props.styles[0]
                  && this.props.styles[0].cluster
                    ? this.props.styles[0].cluster
                    : ''
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

BarChart.propTypes = {
  /** Width of the Chart in px. Accepts only numbers. */
  width: PropTypes.number,
  /** Height of the Chart in px. Accepts only numbers. */
  height: PropTypes.number,
  /** Sets margin for the chart inside of the container. Format: {"top": 0, "right": 0, "bottom": 0, "left": 0 } */
  margin: PropTypes.shape({
    left: PropTypes.number, right: PropTypes.number, top: PropTypes.number, bottom: PropTypes.number,
  }),
  /** Turns on/off horizontal labels. */
  xLabels: PropTypes.bool,
  /** Title for the horizontal label. */
  xAxisTitle: PropTypes.string,
  /** Turns on/off vertical labels. */
  yLabels: PropTypes.bool,
  /** Title for the vertical label. */
  yAxisTitle: PropTypes.string,
  /** Turns on/off horizontal grid lines. */
  horizontalGridLines: PropTypes.bool,
  /** Turns on/off vertical grid lines. */
  verticalGridLines: PropTypes.bool,
  /** Data Array. Structure: [[{"x": 0, "y": 1}, {"x": 1, "y": 3}], [{"x: 0", "y": 2}, {"x": 1, "y": 3]].  */
  data: PropTypes.array,
  /** Type of the scale for X axis. Linear allows only for numbers, Ordinal let's you specify x axis as text e.g. "Q1" */
  xScaleType: PropTypes.oneOf(['linear', 'ordinal']),
  /** Type of the scale for Y axis. Linear allows only for numbers, Ordinal let's you specify x axis as text e.g. "Q1" */
  yScaleType: PropTypes.oneOf(['linear', 'ordinal']),
  /** Starting point for data set. Used for triggering animation. Same data structure as data property. */
  startData: PropTypes.array,
  /** Turns, on/off animation and allows for selection of different types of animations. */
  animation: PropTypes.oneOf([false, 'noWobble', 'gentle', 'wobbly', 'stiff']),
  /** Width of every bar in %. 1.0 means the full width.  */
  barWidth: PropTypes.string,
  /** Color to be used on all chart lines, unless colorRange is provided */
  color: PropTypes.string,
  /** Array with colors to be used across all chart lines. If array doesn't specify color for all the chart lines, color property is used. */
  colorRange: PropTypes.arrayOf(PropTypes.string),
  /** Color filling inside of every circle on the chart */
  fill: PropTypes.string,
  /** Range of colors to be used as a filling  */
  fillRange: PropTypes.arrayOf(PropTypes.string),
  /** Stroke color */
  stroke: PropTypes.string,
  /** Specifies opacity for all the chart lines, unless styles array is provided */
  opacity: PropTypes.string,
  /** Object with styles that allows for specifying styles for every line separtely. Accepts: StrokeStyle, StrokeWidth and Opacity. Format: [{"strokeStyle": "solid"}] */
  styles: PropTypes.arrayOf(PropTypes.object),
  /** Turns on/off crossHair */
  crossHair: PropTypes.bool,
  hint: PropTypes.bool,
  onNearestXY: PropTypes.func,
  onSeriesClick: PropTypes.func,
  onSeriesMouseOver: PropTypes.func,
  // eslint-disable-next-line react/no-unused-prop-types
  onSeriesMouseOut: PropTypes.func,
  onSeriesRightClick: PropTypes.func,
};

BarChart.defaultProps = {
  width: 300,
  height: 300,
  xLabels: true,
  yLabels: true,
  verticalGridLines: true,
  horizontalGridLines: true,
  crossHair: false,
  hint: false,
  barWidth: 0.8,
};
