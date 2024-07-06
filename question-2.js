// Question #2: User Task List

const userTaskList = [
  { id: 1, task: "Buy groceries" },
  { id: 2, task: "Finish homework" },
  { id: 3, task: "Call mom" },
  { id: 4, task: "Wash dishes" },
];

const emptyArray = [];
// เริ่มเขียนโค้ดตรงนี้
/**
 * 1. add function 
 * 2. update function 
 * 3. delete function
 *  3.1 delete by id
 *  3.2 delete latest 
 * 4. Log latest Task -- maybe using function
 */

// (1) Add function for array -- should check duplication of task or no ? What If array's empty ? 
function addTask(arrayList, newTask) {
  const lastId = arrayList.length ? arrayList.slice(-1)[0]?.["id"] : 0
  const newId = lastId + 1;
  arrayList.push( {id: newId, "task" : newTask});
  console.log(`Finished Adding new task: ${newTask} as task no.${newId}.`);
}

// (2) Update function -- using index as pointer. What if can't find that index ?  
function updateTask(arrayList, taskId, editTask) {
  const taskIndex = arrayList.findIndex(task => task.id === taskId)

  if (taskIndex !== -1) {
    arrayList[taskIndex].task = editTask;
    console.log(`Task id: ${taskId} has been updated to "${editTask}".`);
   } else {
    console.log(`Cannot find task id: ${taskId}.`);
   }
}

// (3.1) Delete function -- using index to point the object that wanna delete
function delTask(arrayList, taskId) {
  const taskIndex = arrayList.findIndex(task => task.id === taskId)

  if (taskIndex !== -1 ) {
    arrayList.splice(taskIndex, 1);
    console.log(`Delete Task id: ${taskId}.`);
    return true;
  } else {
    console.log(`Cannot find task id: ${taskId}.`);
    return false;
  }
}

// (3.2) Delete function -- lastest object in the list
function delLastestTask(arrayList) {
  if (arrayList.length === 0) {
    console.log("No task in the list right now");
  return false;
}
  const deleteTask = arrayList.pop();
  console.log(`Delete latest task: ${deleteTask.task}. task id: ${deleteTask.id}.`);
  return true;
}

// (4) Log latest task in the list
function getLatestTask(arrayList) {
  if (arrayList.length === 0) {
    return "No task available.";
  }
  const latestTask = arrayList[arrayList.length - 1];
  return console.log(`Latest task is: "${latestTask.task}". Id: ${latestTask.id}`);
} 

// execute //
addTask(userTaskList, "Walk the dog");
updateTask(userTaskList, 4, "Go to the gym");
//console.log(userTaskList); 

delLastestTask(userTaskList);
getLatestTask(userTaskList); 
