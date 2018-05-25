import React, { Component } from 'react';
import './dayPicker.css'
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css'

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.addComm = this.addComm.bind(this);
    this.state = {
      selectedDays:
      [
        {data: new Date(2018, 4, 11),
         comm: 'tsap-tsap'},
        {data: new Date(2018, 4, 31),
         comm: 'whhaaaaaaaat?'},
        {data: new Date(2018, 3, 4),
         comm: 'ist time to omnomnom'},
      ],
    };
  }

  componentDidMount() {
    this.monthChange()
  }

  handleDayClick(day, { selected }) {
    const { selectedDays } = this.state;

    if (day < new Date()) {
      return
    }
    if (selected) {
      const selectedIndex = selectedDays.findIndex(selectedDay =>
        DateUtils.isSameDay(selectedDay.data, day)
      );
      selectedDays.splice(selectedIndex, 1);
    }
    else {
        selectedDays.push({
          data: day,
          comm: ''
        });
      }
    this.setState({ selectedDays: selectedDays  });
  }

  parseLog() {

    let parse = this.state.selectedDays
      .sort((a,b) => {
        return new Date(a.data) - new Date(b.data)
      })
      .map(item => {
        let dateNum = item.data.getDate()
        if (dateNum < 10) {
          dateNum = "0" + dateNum;
        }
        let monthNum = item.data.getMonth() + 1
        if (monthNum < 10) {
          monthNum = "0" + monthNum;
        }
        let key = item.data.getDate().toString() + item.data.getMonth().toString() + item.data.getYear().toString();
        return (

          <div key={key} className={'logListItems'}>
              <span>{dateNum + '.' + monthNum + '.' + item.data.getFullYear()}</span>
              <input type='text' value={item.comm} onChange={(e) => this.addComm(e, item)}></input>
              {
                Date.parse(item.data) < Date.parse(new Date())
                ?
                <span>&nbsp; &nbsp; &nbsp; &nbsp;</span>
                :
                <i className="material-icons" onClick = {() => this.handleDayClick(item.data, {selected: true})} > delete_outline </i>
              }
          </div>
         )
      })
    return parse
  }

  addComm(e, item) {
    let newComm = this.state.selectedDays
    for(let i = 0; i < newComm.length; i++) {
      if(newComm[i].comm === item.comm && newComm[i].data.toString() === item.data.toString()) {
        newComm[i].comm = e.target.value
      }
     }
    this.setState({
      selectedDays: newComm
    })
  }

  monthChange() {
    let elems = $('.DayPicker-Day')
    let elemsMap = elems.map(i => {
      if(elems[i].classList.contains('DayPicker-Day--selected') && elems[i].getAttribute("aria-disabled") === "false") {
              let selData = Date.parse(elems[i].getAttribute("aria-label"))
              let nowData = Date.parse(new Date())
          if (selData < nowData) {
            elems[i].classList.remove('DayPicker-Day--selected')
            elems[i].classList.add('DayPicker-Day--before')
          }
      }
    })
  }

  render() {
    let testArr = this.state.selectedDays.map(item => {
      return item.data
    })

    return (
      <div className='content z-depth-2'>

        <div className="space z-depth-1">
          <h1>Calendar</h1>
          <div>
            <DayPicker
              className="calendar"
              selectedDays={testArr}
              onDayClick={this.handleDayClick}
              onMonthChange ={this.monthChange}
            />
          </div>
        </div>

        <div className="log z-depth-1">
          <h1>Log</h1>
          <div className="logList">
            {this.parseLog()}
          </div>
        </div>
      </div>
    )
  }
}

export default Calendar;
