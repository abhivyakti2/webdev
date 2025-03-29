let input = document.querySelector('input');
let button = document.querySelector('button');
let taskList = document.querySelector('ul');

let todos = [
    { task: 'Cricket', id: 1 },
    { task: 'Hockey', id: 2 },
    { task: 'Sing', id: 3 },
    { task: 'Coding', id: 4 },
]; 

let currentId = todos.length + 1;

class Todo {
    static addTask(name, initialLoading = false) {
        let li = document.createElement('li');
        li.innerText = name;
        li.setAttribute('id', name);
        let btn1 = document.createElement('button');
        btn1.innerText = '↓';
        btn1.classList.add('decrease-priority');
        let btn2 = document.createElement('button');
        btn2.innerText = '↑';
        btn2.classList.add('increase-priority');
        let btn3 = document.createElement('button');
        btn3.innerText = '❌';
        btn3.classList.add('delete-task');
        let btn4 = document.createElement('button');
        btn4.innerText = '📝';
        btn4.classList.add('update-task');
        li.appendChild(btn1);
        li.appendChild(btn2);
        li.appendChild(btn3);
        li.appendChild(btn4);
        // li.classList.add('spacing')
        taskList.appendChild(li);

        if (initialLoading == false) {
            todos.push({
                task: name,
                id: currentId++
            });
            console.log(todos);
        }
    }

    static refreshTodos() {
        taskList.innerText = "";
        for (let i = 0; i < todos.length; i++) {
            this.addTask(todos[i].task, true);
        }
    }

    static deleteTask(indx) {
        todos.splice(indx, 1);
        console.log(todos);
        this.refreshTodos();
    }

    static increasePriority(indx) {
        if (indx > 0) {
            let temp = todos[indx];
            todos[indx] = todos[indx - 1];
            todos[indx - 1] = temp;
            this.refreshTodos();
        }
    }

    static decreasePriority(indx) {
        if (indx < todos.length - 1) {
            let temp = todos[indx];
            todos[indx] = todos[indx + 1];
            todos[indx + 1] = temp;
            this.refreshTodos();
        }
    }

    static updateTask(indx) {
        let newTask = prompt("Enter new task name:", todos[indx].task);
        if (newTask && newTask.trim() !== "") {
            todos[indx].task = newTask.trim();
            this.refreshTodos();
        }
    }    
}

Todo.refreshTodos();

button.addEventListener('click', (ev) => {
    let inputData = input.value.trim();
    input.value = "";

    if (inputData) {
        Todo.addTask(inputData);
    }
});

taskList.addEventListener('click', (ev) => {
    let target = ev.target;
    let taskName = target.parentElement.innerText;
    taskName = taskName.slice(0, taskName.length - 5);
    let indx;
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].task == taskName) {
            indx = i;
            break;
        }
    }
    if (target.classList.contains('delete-task')) {
        Todo.deleteTask(indx);
    }
    else if (target.classList.contains('increase-priority')) {
        Todo.increasePriority(indx);
    }
    else if (target.classList.contains('decrease-priority')) {
        Todo.decreasePriority(indx);
    }
    else if (target.classList.contains('update-task')) {
        Todo.updateTask(indx);
    }
});
