import {uuid} from '../../Utilities';
import { dateWithFormat } from '../../WEDateUtils';


const testMap = {
  change: "first instance"
};

export const Task =  function(type,dataObj={}) {
  
  let today = new Date();

  const defaultTask = {
    id: "",
    title: "Untitled ",
    description: "default",
    type: "",
    contactId: "default",
    authorId: "default",
    assigneeId: "default",
    groupId: "default",
    priority: 0,
    status: 1,
    position: 0,
    dueDate: dateWithFormat(today,'sql'),
    modifiedDate: dateWithFormat(today,'sql'),
    creationDate: dateWithFormat(today,'sql'),
    closeDate: dateWithFormat(today,'sql'),
    completionDate: dateWithFormat(today,'sql')
  }

  const task = {...defaultTask,...dataObj}

  // task.test = testMap;
  task.id = task?.id?.length > 0 ? task.id : uuid("tsk_");
  task.type = task?.type?.length > 0 ? task.type : type;
  
  return task;  
}