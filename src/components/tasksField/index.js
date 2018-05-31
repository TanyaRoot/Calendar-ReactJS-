import React, { Component } from 'react';
import './index.css'
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
// import { CSSTransitionGroup } from 'react-transition-group'

class TasksField extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.openTasksButton = this.openTasksButton.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
    this.openThisTask = this.openThisTask.bind(this);
    // this.changeOpt = this.changeOpt.bind(this);
    this.state = {
      root: true,
      dataTasks:
      [
        {taskId: 1,
         taskName: "сверстать огурчик",
         taskDescription: "зелёный",
         taskDataStart: new Date(2018, 5, 29),
         taskDataEnd: {},
         taskStatus: false,
         taskEdit: false},
        {taskId: 2,
         taskName: "отфлексить нарута",
         taskDescription: "по всем сторонам",
         taskDataStart: new Date(2018, 5, 30),
         taskDataEnd: {},
         taskStatus: false,
         taskEdit: false},
        {taskId: 3,
         taskName: "запушить стили",
         taskDescription: "все",
         taskDataStart: new Date(2018, 5, 13),
         taskDataEnd: new Date(2018, 5, 13),
         taskStatus: true,
         taskEdit: false}
      ],
      newTask: false,
      showArchive: false,
      check: false
    }
  }

  openThisTask(e, refs) {

    let taskEdit = this.state.dataTasks

    if(refs === undefined) {
      taskEdit.map((item) => {
        if(item.taskId === e && !item.taskEdit) {
          item.taskEdit = !item.taskEdit
        }
      })
    }else {
      taskEdit.map((item) => {
        if(item.taskId === e && item.taskEdit) {
          item.taskEdit = !item.taskEdit
          item.taskName = refs[e].children[0].value
          item.taskDescription = refs[e].children[1].value
        }
      })
    }

    this.setState({
      dataTasks: taskEdit
    })

  }

//запихиватель чекбоксами в архив
// && !item.taskStatus
  changeOpt(e, status, {selected} ) {
    let taskStatus = this.state.dataTasks
    // const { dataTasks} = this.state
    // console.log('blyaaaaaaaa1', e);
    // console.log('blyaaaaaaaa2', status);
    console.log('blyaaaaaaaa3', {selected});
    let newArrCheck = this.state.dataTasks.map(item => {
      // console.log('1--', item.taskStatus, '2--', status, '3--' ,item.taskId)
      if (item.taskId === status) {
        // console.log('44', item.taskStatus);
        // console.log('55', !item.taskStatus);
        item.taskStatus = !item.taskStatus
      }
      // console.log('1-+++-', item.taskStatus, '2-+++-', status, '3-+++-' ,item.taskId)
    })

    this.setState({
      dataTasks: taskStatus
    })
  }

  dataTasksRender() {

    let taskArr = this.state.dataTasks.map(item => {
      if (item.taskStatus === false) {

      return (

        <div key={item.taskId} >

          <div  className="tasksList--checkBox accordion z-depth-1" >

            <input className="checkBox--square" type="checkbox"
            onChange={(e) => this.changeOpt(e, item.taskId, {selected: true})}/>

            <div onClick={() => this.openThisTask(item.taskId)}>
              <label htmlFor='checkBox--square' >{item.taskName}</label>
              <span>: &nbsp; </span>
              <span>{item.taskDescription}</span>
            </div>
          </div>

                <div  className={item.taskEdit ? "checkBox--accordion active" : "checkBox--accordion"}
                      ref={item.taskId}
                      >
                  <input className="addTask--taskName z-depth-3" type="text" defaultValue={item.taskName} />
                  <textarea className="addTask--taskDescription" type="text" defaultValue={item.taskDescription}></textarea>
                  <button className="addReTask--button" onClick={() => this.openThisTask(item.taskId, this.refs)}>Save</button>
                </div>

        </div>
      )
    }
    })
    return taskArr
  }

  /**
  <div>
      <div className={item.taskEdit ? "checkBox--accordion active" : "checkBox--accordion"} ref={item.taskId}>
        <input className="addTask--taskName z-depth-3" type="text" defaultValue={item.taskName} />
        <input className="addTask--taskDescription z-depth-3" type="text" defaultValue={item.taskDescription} />
        <button className="" onClick={() => this.openThisTask(item.taskId, this.refs)}>Save</button>
      </div>
  </div>
  */

  // addTask(status) {
  //   this.setState({newTask: status})
  // }
  //
  // showArchive(status) {
  //   this.setState({showArchive: status})
  // }

  openTasksButton(name, status) {
    this.setState({
      [name]: status
    })
  }

  dataArchiveRender() {
    let taskArr = this.state.dataTasks.map(item => {
      if (item.taskStatus === true) {

        return (

          <div key={item.taskId} className="tasksList--checkBox__arhiv z-depth-1">
          <input className="checkBox--square"
                 type="checkbox"
                 defaultChecked="true"
                 onChange={(e) => this.changeOpt(e, item.taskId, {selected: false})}/>
            <label htmlFor='checkBox--square' >{item.taskName}</label>
            <span>: &nbsp; </span>
            <span>{item.taskDescription}</span>
          </div>
        )
      }

    })
    return taskArr
  }

  handleSaveClick(e, refs) {
    const { dataTasks } = this.state
    // let name = dataTasks.taskName.value
    // console.log('this.refs', e.taskName.value);
    if (e.taskName.value === '') {
      // console.log('error');
      null
    } else {
      dataTasks.push(
        {taskId: this.state.dataTasks[this.state.dataTasks.length - 1].taskId + 1,
         taskName: e.taskName.value,
         taskDescription: e.taskDescription.value,
         taskDataStart: "",
         taskDataEnd: "",
         taskStatus: false}
      )
    }


    this.setState({dataTasks: dataTasks })
    this.openTasksButton('newTask', !this.state.newTask, {status: true})
  }

/**
1.рендарим логлист -- контейнер под него(tasksList) -- шапку(tasksHeader) с кнопками(архив и добавить) -- с реакцией openTasksButton
2.вызываем dataTasksRender, который промапивает dataTasks - и вытаскивает только item.taskStatus === false -- нерешенные таски
3.место для отображения архива и добавления нового таска
*/
  render() {
    // console.log(this.state);
    return (
      <div className='tasksList z-depth-2'>

        <div className="tasksList--tasksHeader">
          <h1>Tasks List</h1>
          <div className="tasksHeader--button">
            <button className="button--archive" onClick={(e) => this.openTasksButton('showArchive', !this.state.showArchive, {status: true})}>A</button>
            <button className="button--addTask" onClick={(e) => this.openTasksButton('newTask', !this.state.newTask)}>+</button>
          </div>
        </div>

        {this.dataTasksRender()}

        {this.state.newTask
          ?
          <div className="newTask--addTask z-depth-1">
            <h1>Add new task</h1>
            <input ref="taskName" className="addTask--taskName" type="text" placeholder="add task name" required />
            <textarea ref="taskDescription" className="addTask--taskDescription" type="text" placeholder="add description" ></textarea>
            <button className="addTask--button" onClick = {() => this.handleSaveClick(this.refs)}>Save</button>
          </div>
          :
          null
        }
          {this.state.showArchive
            ?
            <div className="tasksList--dataArchiveRender">
            <h1>Archive</h1>
            {this.dataArchiveRender()}
            </div>
            :
            null
          }

      </div>
    )
  }
}

export default TasksField;
// <CSSTransitionGroup
// transitionName="example"
// transitionEnterTimeout={500}
// transitionLeaveTimeout={300}>
//   </CSSTransitionGroup>
/**
<ReactCSSTransitionGroup
    className="example"
    transitionAppear={true}
    transitionEnterTimeout={500}
    transitionLeaveTimeout={300} >
</ReactCSSTransitionGroup>
*/
