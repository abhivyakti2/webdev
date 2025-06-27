let input = document.querySelector('input');
let button = document.querySelector('button');
let taskList=document.querySelector('ul');

// let todos=[];


let todos = [
    { task: 'Coding', id: 1 },
    { task: 'Mentee help, COA file', id: 2 },
    { task: 'OS COA DAA study', id: 3 },
    { task: 'DSA', id: 4 },
];

let currentId=todos.length+1;

class Todos{
    static addTask(taskName,  initialLoading = false){
        let li= document.createElement('li');
        li.innerText= taskName;
        li.setAttribute('id', taskName);
    
        let btn1=document.createElement('button');
        btn1.innerText='Upgrade';
        btn1.classList.add('increase-priority');
    
        let btn2=document.createElement('button');
        btn2.innerText='Downgrade';
        btn2.classList.add('decrease-priority');
    
        let btn3=document.createElement('button');
        btn3.innerText='Update';
        btn3.classList.add('update-task');
    
        let btn4=document.createElement('button');
        btn4.innerText='🗑️';
        btn4.classList.add('delete-task');
    
        li.appendChild(btn1);
        li.appendChild(btn2);
        li.appendChild(btn3);
        li.appendChild(btn4);
    
        taskList.appendChild(li);
        
        if (initialLoading == false){
            
        todos.push({
            task: taskName,
            id: currentId++
        })
        console.log(todos);
        }


    }

    static refreshTodos(){
        taskList.innerText = "";
        for(let i=0; i<todos.length; i++){
            this.addTask(todos[i].task, true);
        }
    }
    static deleteTask(taskName){
        let idx;
        for(let i=0; i<todos.length; i++){
            if(todos[i].task==taskName){
                idx=i;
                break;
            }
        }
        let partA=todos.slice(0, idx);
        let partB=todos.slice(idx+1);
        todos=[...partA, ...partB];
        console.log(todos);
        this.refreshTodos();

    }

    static incPriority(taskName){
        let idx;
        for(let i=0; i<todos.length; i++){
            if(todos[i].task==taskName){
                idx=i;
                break;
            }
        }
        if(idx>0){
            let prev=idx-1;
            let temp=todos[idx];
            todos[idx]=todos[prev];
            todos[prev]=temp;
            this.refreshTodos();
        }
    }
    static decPriority(taskName){
        let idx;
        for(let i=0; i<todos.length; i++){
            if(todos[i].task==taskName){
                idx=i;
                break;
            }
        }
        if(idx<todos.length-1){
            let next=idx+1;
            let temp=todos[idx];
            todos[idx]=todos[next];
            todos[next]=temp;
            this.refreshTodos();
        }
    }
    static updateTask(taskName) {
    let currentItem = document.getElementById(taskName);
    
    currentItem.innerHTML = '';

    // Create an input box
    let input = document.createElement('input');
    input.type = 'text';
    input.value = taskName;

    // Create a Save button
    let saveButton = document.createElement('button');
    saveButton.innerText = 'Save';
    saveButton.classList.add('save-task');

    // Append input and save button to li
    currentItem.appendChild(input);
    currentItem.appendChild(saveButton);

    // When save button clicked, update task
    saveButton.addEventListener('click', () => {
        let newName = input.value.trim();
        if (newName) {
            // Update in todos array
            for (let i = 0; i < todos.length; i++) {
                if (todos[i].task == taskName) {
                    todos[i].task = newName;
                    break;
                }
            }
            console.log(todos);

            // Refresh the list
            Todos.refreshTodos();
        }
    });
}

}

Todos.refreshTodos();

button.addEventListener('click', (ev)=>{
    let name=input.value.trim();
    input.value="";
    if (name){
        Todos.addTask(name);
    }
})

taskList.addEventListener('click', (ev)=>{
    let target=ev.target;
    if(target.classList.contains('delete-task')){
        // let Name=target.parentElement.innerText;
        // console.log(Name.length);
        let Name=target.parentElement.getAttribute('id');
        // target.parentElement.remove();
        
        Todos.deleteTask(Name);
    }

    if(target.classList.contains('increase-priority')){
        let currentItem=target.parentElement;
        let item=currentItem.getAttribute('id');
        console.log(item);
        Todos.incPriority(item);

    }
    if(target.classList.contains('decrease-priority')){
        let currentItem=target.parentElement;
        let item=currentItem.getAttribute('id');
        console.log(item);
        Todos.decPriority(item);
    }
    if(target.classList.contains('update-task')){
        let currentItem=target.parentElement;
        let item=currentItem.getAttribute('id');
        // let newName= 
        // console.log(Name,newName);
        Todos.updateTask(item);
    }

})