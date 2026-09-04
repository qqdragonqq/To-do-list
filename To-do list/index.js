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
    const task_box=document.createElement('div')
    task_box.className='task_box'
    const span=document.createElement('span')
    const del_btn=document.createElement('button')
    del_btn.textContent='X'
    del_btn.onclick=function(){task_box.remove()}
    span.textContent=text
    task_box.appendChild(span)
    task_box.appendChild(del_btn)
    del_btn.id='del_btn'
    document.getElementById('alltasks').appendChild(task_box)
    close_overlay()
}