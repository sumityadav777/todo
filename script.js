let tasks = [];

const deleteTask =(index)=>{
    console.log("hello w")
    tasks.splice(index,1);
    renderTasks();
}


const renderTasks = () => {
    const tasklist = document.getElementById('taskList');
    tasklist.innerHTML=''

    tasks.forEach((task,index)=>{
        const li =  document.createElement('li');
        li.textContent=task.name;
        const btn  = document.createElement('button');
        btn.innerHTML='<div>delete</div>'
        btn.className='delete';
        btn.onclick = () => deleteTask(index);

        li.appendChild(btn);
        tasklist.appendChild(li);

    });

}

const addTask = () => {
    const name = document.getElementById('taskinput');
    if(name!== ''){
        const task = {
            name: name.value,
            date: new Date()
        }
        tasks.push(task);
        renderTasks();
    }
}


const clearAllTask =()=>{
    tasks = [];
    renderTasks();
}
const countTask = ()=>{
    alert("total number of tasks is:" + tasks.length)

}

