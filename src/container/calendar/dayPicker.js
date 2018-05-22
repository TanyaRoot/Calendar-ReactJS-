import React, { Component } from 'react';
import './dayPicker.css'
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css'

class Calendar extends React.Component {

  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      selectedDays: [],
    };
  }
  handleDayClick(day, { selected }) {
    const { selectedDays } = this.state;
    if (selected) {
      const selectedIndex = selectedDays.findIndex(selectedDay =>
        DateUtils.isSameDay(selectedDay, day)
      );
      selectedDays.splice(selectedIndex, 1);
    } else {
      selectedDays.push(day);
    }
    this.setState({ selectedDays: selectedDays });
    // console.log('----', selectedDays);
  }

  parseLog() {

    let parse = this.state.selectedDays.map(item => {
          return <li key={item.getDate().toString() + item.getMonth().toString() + item.getYear().toString()}>{item.getDate()}</li>
        })
    return parse
  }

  render() {
    return (
      <div className='content z-depth-2'>

        <div className="space z-depth-1">
          <h1>Calendar</h1>
          <div>
            <DayPicker
              className="calendar"
              selectedDays={this.state.selectedDays}
              onDayClick={this.handleDayClick}
            />
          </div>
        </div>

        <div className="log z-depth-1">
          <h1>Log</h1>
          <ul id="showLog">{this.parseLog()}</ul>
        </div>

      </div>
    )
  }
}

export default Calendar;
