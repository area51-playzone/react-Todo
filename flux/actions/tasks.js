import dispatcher from '../dispatcher';
import * as ACT from '../types';
import ajax from "../../utils/ajax";

export function addTask(packt){
  ajax({
    url: '/add-task',
    data: packt,
    successHook: (task) =>{
      console.log("task:::::::::::", task);
      addTasksSync(task);
    }
  });
}

export function addTasksSync(packt){
  dispatcher.dispatch({type: ACT.ADD_TASK, payload: packt})
}

export function remove(packt){
  ajax({
    url: '/remove',
    data: packt,
    successHook: ({removed}) =>{
      console.log("task removed:::::::::::");
      removed && dispatcher.dispatch({type: ACT.REMOVED, payload: packt });
    }
  });
}
export function initTasks(){
  ajax({
    url: '/all',
    method: "get",
    successHook: (tasks) =>{
      console.log("task fetched:::::::::::", tasks);
      dispatcher.dispatch({type: ACT.INIT_TASKS, payload: tasks });
    }
  });
}