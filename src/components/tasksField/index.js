import React, { Component } from 'react';
import './index.css'



class TasksField extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.addTask = this.addTask.bind(this);
    this.state = {
      isChecked: false,
      dataTasks:
      [
        {taskId: "1",
         tasksName: "сверстать огурчик",
         taskDescription: "зелёный",
         taskDataStart: new Date(2018, 5, 29),
         taskDataEnd: "",
         taskStatus: false},
         {taskId: "2",
          tasksName: "отфлексить нарута",
          taskDescription: "по всем сторонам",
          taskDataStart: new Date(2018, 5, 30),
          taskDataEnd: "",
          taskStatus: false}
      ],
      newTask: false
    }
  }


  handleChange(e) {
    // console.log('e: ', e);
    this.setState((defaultState) => ({
      isChecked: !defaultState.isChecked
      })
    )
    // console.log('eeee ');
  }

  dataTasksRender() {
    let taskArr = this.state.dataTasks.map(item => {
      return (
        <div key={item.taskId} className="tasksField--checkBox">
          <input className="checkBox--box" type="checkbox" onChange={(e) => this.handleChange(e.target.checked)}/>
          <label htmlFor='checkBox--box' >{item.tasksName}</label>
          <span>: &nbsp; </span>
          <span>{item.taskDescription}</span>
        </div>
      )
    })
    return taskArr
  }

  addTask() {
    this.setState({newTask: true})
  }


  render() {
    return (
      <div className='tasksField z-depth-2'>

        <div className="tasksField--tasksName">
          <h1>Tasks List</h1>
          <div className="tasksName--button">
            <button className="button--archive">A</button>
            <button className="button--addTask" onClick={this.addTask} newTask={!this.state.newTask}>+</button>
          </div>
        </div>

        {this.dataTasksRender()}

        {this.state.newTask
          ?
          <div className="newTask--addTask">
            <input type="text" placeholder="add task name" />
            <input type="text" placeholder="add description" />
          </div>
          :
          <div></div>
        }

      </div>
    )
  }
}

export default TasksField;
