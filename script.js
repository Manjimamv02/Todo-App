const add = () => {
 const taskInput = document.getElementById("taskInput");

 const task = taskInput.value;

 taskInput.value = ""
 if(task!="")
 display(task)

 console.log(task)
}
var counter = 1;
const display = (task) => {

  const taskCont =  document.getElementById("taskContainer");

  let taskId = `task${counter}`


  let taskBody = document.createElement('div')
  let taskName = document.createElement('P')
 let deleteIcon = document.createElement('i')

 taskBody.id = taskId;

 
taskName.textContent= task

taskBody.classList = "w-full h-8 flex justify-between items-center px-2"
deleteIcon.classList = "text-red-900 ri-delete-bin-5-line"

deleteIcon.addEventListener("click",() =>{ 
  deleteTask(taskId)
})
 taskName.addEventListener("click", () => {
  taskDone(taskId)
 })
 
 taskBody.appendChild(taskName)
 taskBody.appendChild(deleteIcon)

 taskCont.appendChild(taskBody)
 
 counter++;


}
const deleteTask = (taskId) => {
  document.getElementById(taskId).remove();
}

const taskDone = (taskId) => {
  const task = document.getElementById(taskId);
  const task_ptag = task.querySelector('p')

  task_ptag.classList.toggle("text-green-500")
  task_ptag.classList.toggle("line-through")
   
}

 