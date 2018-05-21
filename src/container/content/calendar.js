import React, { Component } from 'react';
import DayPickerCalendar from '../../components/dayPicker'

class Calendar extends Component {
  componentWillMount() {}

  render() {
    return (
      <div className="space z-depth-1">
        <h1>Calendar</h1>
        <DayPickerCalendar  />
      </div>
    )
  }
}

export default Calendar
