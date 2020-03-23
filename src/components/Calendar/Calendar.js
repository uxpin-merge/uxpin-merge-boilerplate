import React, { Component } from 'react';
import Calendar from 'react-calendar';

import './styles.css';

export default class ReactCalendar extends Component {
  state = {
    value: new Date(),
  }

  onChange = value => this.setState({ value })

  render() {
    const { value } = this.state;

    return (
      <Calendar
        onChange={this.onChange}
        value={value}
      />
    );
  }
}