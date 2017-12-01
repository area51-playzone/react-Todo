import React from "react";
import Task from "./task";
import Button from "./button";

export default class Tasks extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      tasks:[
        // {_id: 0, label: "hello world 4.0"},
        // {_id: 1, label: "hello world 4.1"},
        // {_id: 2, label: "hello world 4.2"},
        // {_id: 3, label: "hello world 4.3"}
      ]
    }

    this.addTask = this.addTask.bind(this);
  } 
  addTask(e){
    const tasks = this.state.tasks.slice(0),
    input = this.input;
    tasks.push({label: input.value, _id: tasks.length });
    this.setState({tasks})
    console.log(e)
  }
  render(){
    const {tasks} = this.state,
          ch1 = []; 
    for(const {_id, label, ...rest} of tasks){
      ch1.push(<Task key={_id}>{label}</Task>)
    }
    return <div>
      {ch1}
      <input 
        name="add"
        type="text"
        ref={(a) => {this.input = a}}
      />
      <Button 
        className="-secondary"
        onClick={this.addTask}  
      >
        Add task
      </Button>
    </div>;
  }
}
