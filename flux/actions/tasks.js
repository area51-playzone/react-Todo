import dispatcher from '../dispatcher';
import * as ACT from '../types';
import ajax from "../../utils/ajax";

export function addTask(packt){
  ajax({
    url: '/add-task',
    data: packt,
    successHook: (task) =>{
      addTasksSync(task);
    }
  })
}

export function addTasksSync(packt){
  dispatcher.dispatch({type: ACT.ADD_TASK, payload: packt})
}