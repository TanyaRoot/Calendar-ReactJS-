import React, { Component } from 'react';
import './dayPicker.css'
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css'
import TasksField from '../../components/tasksField/index'

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.addComm = this.addComm.bind(this);
    this.openArchiveButton = this.openArchiveButton.bind(this);

    this.state = {
      selectedDays:
      [
        {data: new Date(2018, 4, 11),
         comm: 'tsap-tsap',
         archiveStatus: true,
         logId: ""},
        {data: new Date(2018, 4, 31),
         comm: 'whhaaaaaaaat?',
         archiveStatus: true},
        {data: new Date(2018, 3, 4),
         comm: 'ist time to omnomnom',
         archiveStatus: false},
        {data: new Date(2018, 5, 21),
         comm: 'ya tyt nahodilsya',
         archiveStatus: false}
      ],
      openArchive: false,
    };
  }

  componentDidMount() {
    this.checkStatus()
    this.monthChange()
  }

  checkStatus() {
    const { selectedDays } = this.state
    let checkStatus = selectedDays.map(item => {
      if (Date.parse(item.data) < Date.parse(new Date()) && item.archiveStatus === false) {
        item.archiveStatus = true
        return item
      } else {
        return item;
      }
    })
    this.setState({selectedDays : checkStatus })
    return checkStatus
  }

  handleDayClick(day, { selected }) {
    const { selectedDays } = this.state;
    // console.log('selectedDays', selectedDays);
    if (day.setHours(23) < Date.parse(new Date())) {
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
          comm: '',
          archiveStatus: false
        });
      }
    this.setState({ selectedDays: selectedDays  });
  }

  parseLog(openArchive) {
    // console.log('st', archiveStatus);
    let parse = this.state.selectedDays
      .sort((a,b) => {
        // console.log('1',this.state);
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

        if (openArchive === false) {
          if (item.archiveStatus === true) {
            return null
            } else {
            return (
              <div key={key} className={'logList--items'}>
                  <span>{dateNum + '.' + monthNum + '.' + item.data.getFullYear()}</span>
                  <input type='text' value={item.comm} onChange={(e) => this.addComm(e, item)}></input>
                  {
                    Date.parse(item.data) < Date.parse(new Date())
                    ?
                    null
                    :
                    <i className="material-icons" onClick = {() => this.handleDayClick(item.data, {selected: true})} > delete_outline </i>
                  }
              </div>
              )
            }
        }
        else {
          if (item.archiveStatus === false) {
            return null
            } else {
            return (
              <div key={key} className={'logList--items'}>
                  <span>{dateNum + '.' + monthNum + '.' + item.data.getFullYear()}</span>
                  <input type='text' value={item.comm} onChange={(e) => this.addComm(e, item)}></input>
                  <span></span>
              </div>
              )
            }
        }



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
      // console.log('i',elems[i]);
      if(elems[i].classList.contains('DayPicker-Day--selected') && elems[i].getAttribute("aria-disabled") === "false") {
              let selData = Date.parse(elems[i].getAttribute("aria-label"))
              let hours = new Date()
              let nowData = Date.parse(new Date())
          if (selData < nowData) {
            elems[i].classList.remove('DayPicker-Day--selected')
            elems[i].classList.add('DayPicker-Day--before')
          }
      }
    })
  }

  // getProfilStatus = (status) => {
  //   this.setState({profilStatus: status})
  //   // console.log('status', status);
  // }

  openArchiveButton(e) {
    this.setState({openArchive: e})
  }

  // parseArchive() {
  //   return (
  //     return (
  //       <div key={key} className={'logList--items'}>
  //           <span>{dateNum + '.' + monthNum + '.' + item.data.getFullYear()}</span>
  //           <input type='text' value={item.comm} onChange={(e) => this.addComm(e, item)}></input>
  //           {
  //             Date.parse(item.data) < Date.parse(new Date())
  //             ?
  //             null
  //             :
  //             <i className="material-icons" onClick = {() => this.handleDayClick(item.data, {selected: true})} > delete_outline </i>
  //           }
  //       </div>
  //      )
  //   )
  // }

  render() {
    const testArr = this.state.selectedDays.map(item => {
        return item.data
      })
    const {openArchive} = this.state
    // console.log('archiveStatus', openArchive);

    return (
      <div className='calendar'>

        <div className="calendar--content z-depth-2">
          <div className="content--dayPicker z-depth-1">
            <div className="dayPicker--header">
              <h1>Calendar</h1>
            </div>

            <div>
              <DayPicker
                className="calendar"
                selectedDays={testArr}
                onDayClick={this.handleDayClick}
                onMonthChange ={this.monthChange}
              />
            </div>
          </div>

          <div className="content--log z-depth-1">
            <div className="log--header">
              {openArchive
                ?
                <h1>Archive</h1>
                :
                <h1>Log</h1>
              }
              <button className="button--archiveLog" onClick = {(e)=> this.openArchiveButton(!this.state.openArchive) }  >A</button>
            </div>

            <div className="log--logList">
              {this.parseLog(openArchive)}
            </div>
          </div>
        </div>

        <TasksField />

      </div>

    )
  }
}

export default Calendar;
//<button className="button--archive" onClick={(e) => this.openTasksButton('showArchive', !this.state.showArchive, {status: true})}>A</button>
//onClick={(e) => this.openArchiveButton({archiveStatus: status})}
//{this.parseLog()}

/**
{this.state.openArchive
  ?
  <div>
  {this.parseLog(item.archiveStatus)}
  </div>
  :
  <p>choto</p>
}
*/
