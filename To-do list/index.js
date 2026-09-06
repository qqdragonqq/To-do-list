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
    const input=document.getElementById('input')
    const text=input.value.trim()
    const task_box=document.createElement('div')//the box that contains the task and the delete button
    if (text===''){  //if the input is empty, do not add a task
        close_overlay()
        return
    }
    task_box.className='task_box'
    const span=document.createElement('span')
    const del_btn=document.createElement('button')
    del_btn.textContent='X'
    del_btn.onclick=function(){task_box.remove()}
    span.textContent=text//the text of the task
    task_box.appendChild(span)//adding the text to the task box
    task_box.appendChild(del_btn)//adding the delete button to the task box
    del_btn.id='del_btn'
    document.getElementById('alltasks').appendChild(task_box)//adding the task box to the list of tasks
    close_overlay()
}