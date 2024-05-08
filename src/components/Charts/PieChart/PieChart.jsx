/** @jsx jsx */
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';
import React from 'react';
import {
  Hint,
  RadialChart,
} from 'react-vis';
import ChartStyles from '../chartStyles/chart.styles';

export default class PieChart extends React.Component {
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
      hintValue: '',
      showHint: false,
    };
  }

  componentDidMount() {
    this.setState({ data: this.props.data });
  }

  getHint(value) {
    if (!this.state.showHint) {
      const hintContent = value.label ? { Data: value.label, Value: `${value.theta * 10}%` } : { Value: `${value.theta * 10}%` };
      this.setState({ hintValue: hintContent, showHint: true });
    } else {
      this.setState({ hintValue: '', showHint: false });
    }
  }

  render() {
    return (
      <RadialChart
        getAngle={(d) => d.theta}
        css={ChartStyles}
        radius={this.props.radius}
        innerRadius={this.props.innerRadius}
        padAngle={parseFloat(this.props.padAngle)}
        showLabels={this.props.showLabels}
        labelsRadiusMultiplier={parseFloat(this.props.labelsRadiusMultiplier)}
        labelsStyle={this.props.labelsStyle}
        data={this.state.data}
        width={this.props.width}
        height={this.props.height}
        colorRange={this.props.colorRange}
        opacity={parseFloat(this.props.opacity)}
        onValueClick={(value) => this.getHint(value)}
        onNearestXY={this.props.onNearestXY}
        onSeriesClick={this.props.onSeriesClick}
        onSeriesRightClick={this.props.onSeriesRightClick}
        onSeriesMouseOver={this.props.onSeriesMouseOver}
        onSeriesMouseOut={this.props.onSeriesMouseOver}
        animation={this.props.animation}>
        {this.props.hint && this.state.showHint ? (
          <Hint value={this.state.hintValue} />
        ) : (
          undefined
        )}
      </RadialChart>
    );
  }
}

/* eslint-disable sort-keys */
PieChart.propTypes = {
  /** Height of the Chart in px. Accepts only numbers. */
  height: PropTypes.number,
  /** Width of the Chart in px. Accepts only numbers. */
  width: PropTypes.number,
  /** Turns, on/off animation and allows for selection of different types of animations. */
  animation: PropTypes.oneOf([false, 'noWobble', 'gentle', 'wobbly', 'stiff']),
  /**
   * Color to be used on all chart lines, unless colorRange is provided
   * @uxpinignoreprop
   */
  // eslint-disable-next-line react/no-unused-prop-types
  color: PropTypes.string,
  /** Array with colors to be used across all chart lines. If array doesn't specify color for all the chart lines, color property is used. */
  colorRange: PropTypes.arrayOf(PropTypes.string),
  /** Data Array. Structure:  [{ "theta": 1, "label": "apples" }, {"theta": 4, "label": "oranges"}, {"theta": 6, "label": "cherries"}]  */
  data: PropTypes.array,
  /** Shows hint on click into every part of the pie chart */
  hint: PropTypes.bool,
  /** In combination with radius property, innerRadius enables ability to create a donut chart. The higher the value the bigger tha hole in the donut.  */
  innerRadius: PropTypes.number,
  /** Specifies the distance between edge of the chart and labels. 1 places labels on the edge of the chart. */
  labelsRadiusMultiplier: PropTypes.string,
  /** Styles object that let's you style labels on the chart */
  labelsStyle: PropTypes.object,
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
  /** Color filling inside of every circle on the chart. */
  opacity: PropTypes.string,
  /** Adds padding between series in the chart. 0 means no padding. 0.005 provides 1px relief. */
  padAngle: PropTypes.string,
  /** Specifies the radius of the chart. Value that equals 50% of the height of the entire component equals 100% of the size. Required to create donut chart. */
  radius: PropTypes.number,
  /** Shows labels one the chart. Set up labels in the data object. Example: {"theta": 1, "label": "Apples"} */
  showLabels: PropTypes.bool,
  /** Starting point for data set. Used for triggering animation. Same data structure as data property. Place "0" in theta to animate. */
  startData: PropTypes.array,
};
/* eslint-enable sort-keys */

PieChart.defaultProps = {
  height: 300,
  hint: false,
  labelsRadiusMultiplier: '1.1',
  opacity: '1',
  width: 300,
};
