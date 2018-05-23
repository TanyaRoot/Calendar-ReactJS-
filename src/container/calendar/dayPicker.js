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
    let elems = $('.DayPicker-Day')
    // console.log(elems);
    // let elemData = $('.DayPicker-Day.DayPicker-Day--selected--before')

    let jopa = elems.map(i => {
      // console.log(elems[i].classList[1]);
      // console.log('xxx', new Date().getDate().toString());
    if (elems[i].classList[1] === 'DayPicker-Day--selected' ) {
      let selData = +elems[i].innerHTML
      // console.log("selData", +elems[i].innerHTML);
      let nowData = +new Date().getDate().toString()
      // console.log(nowData);
      if (selData < nowData) {
        elems[i].classList.value = ('DayPicker-Day DayPicker-Day--selected--before')
      }
      // console.log('eto', elems[i].classList);
      // < new Date().getDate().toString()

      // document.getElements
      // console.log('eto', typeof aria-label);
    }
  })

  // let elemData = $('.DayPicker-Day.DayPicker-Day--selected--before')
  // console.log('tyt', typeof elemData, 'dd', elemData);
  // console.log('data', typeof  +new Date().getDate().toString(), 'dd',  +new Date().getDate().toString());
  // let opa = elemData.map(i => {
  //   console.log('elemData', typeof +elemData[i].innerHTML, 'dd', +elemData[i].innerHTML)
  //   if (+elemData[i].innerHTML > +new Date().getDate().toString()) {
  //     elems[i].classList.value = ('DayPicker-Day DayPicker-Day--selected')
  //   }
  // })

}

  componentWillUpdate()  {
  console.log('hello');
  let elems = $('.DayPicker-Day')
  let jopa = elems.map(i => {
    if (elems[i].classList[1] === 'DayPicker-Day--selected' ) {
      let selData = +elems[i].innerHTML
      let nowData = +new Date().getDate().toString()
      if (selData < nowData) {
        elems[i].classList.value = ('DayPicker-Day DayPicker-Day--selected--before')
      }
    }
  })
}

  handleDayClick(day, { selected }) {
    console.log('чето делаю');
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

  preDayPicker() {
    let testArr = this.state.selectedDays.map(item => {
      return item.data
    })
    return (
      <DayPicker
        className="calendar"
        selectedDays={testArr}
        onDayClick={this.handleDayClick}
      />
    )
  }

  render() {
    // console.log(this.state);
    // let btn = $('.DayPicker-NavButton')
    // let jost = btn.map(i=> {
    //   console.log('lllllllll', btn[i])
    //   return <option key = {knopka}>
    // })

    return (
      <div className='content z-depth-2'>

        <div className="space z-depth-1">
          <h1>Calendar</h1>
          <div>
            {this.preDayPicker()}
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
