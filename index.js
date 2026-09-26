const task_box=document.querySelectorAll('.task_box')//the box that contains the task and the delete button
const span=document.querySelectorAll('.span')   //the task name
const del_btn=document.querySelectorAll('.del_btn')  //delete button
const allTasks=document.getElementById('alltasks')  //the div containing all the tasks user has created

//open and close overlay
const overlay=document.getElementById('darkbg')
function open_overlay(){
    overlay.classList.add('active')
    input.focus()
}
function close_overlay(){
    overlay.classList.remove('active')
    input.value=''
}
overlay.addEventListener('click',function(e){
    if (e.target==darkbg)
        close_overlay()
})
//using enter key to input
overlay.addEventListener('keypress',function(e){
    if (e.key==='Enter')
        add_task()
})


//creating tasks
function add_task(){
    const input=document.getElementById('input')    //getting the input of the task user input
    const text=input.value.trim()   //.trim() removes whitespace from both ends of a string
    if (text===''){  //if the input is empty, do not add a task
        close_overlay()
        return
    }
    const newTaskBox=document.createElement('div')
    const newDelBtn=document.createElement('button')
    const newSpan=document.createElement('span')

    newTaskBox.className='task_box'
    newDelBtn.className='del_btn'
    newSpan.className='span'

    newDelBtn.textContent='X'
    newSpan.textContent=text//the text of the task

    newTaskBox.appendChild(newSpan)
    newTaskBox.appendChild(newDelBtn)
    allTasks.appendChild(newTaskBox)//adding the task box to the list of tasks
    close_overlay()
    saveTasks()
}

//deleting tasks
allTasks.addEventListener('click',(e)=>{
    if (e.target.className==='del_btn'){
        e.target.parentElement.remove()
        saveTasks()
    }
})

function saveTasks(){
    localStorage.setItem('tasks',allTasks.innerHTML)
}
function loadTasks(){
    allTasks.innerHTML=localStorage.getItem('tasks')
}

loadTasks()