import {uuid} from '../../Utilities';
import { dateWithFormat } from '../../WEDateUtils';


const testMap = {
  change: "first instance"
};

export const Task =  function(type,dataObj={}) {

  let today = new Date();

  const defaultTask = {
    id: "",
    type: "",
    title: "Untitled ",
    description: "",
    content: "",   
    contact: "? ?",
    author: "",
    group: "",
    priority: 0,
    status: 1,
    position: "",
    assignee: "? ?",
    creationDate: dateWithFormat(today,'sql'),
    completionDate: dateWithFormat(today,'sql'),
    modifiedDate: dateWithFormat(today,'sql'),
    closeDated: dateWithFormat(today,'sql')
  }

  const task = {...defaultTask,...dataObj}

  task.test = testMap;
  task.id = task?.id?.length > 0 ? task.id : uuid("tsk_");
  task.type = task?.type?.length > 0 ? task.type : type;
  
  return task;  
}