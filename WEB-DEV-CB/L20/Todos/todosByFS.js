const fsSync = require('fs');
const fs=require('fs/promises')
const path = require('path');



class Todos {
    // Get all tasks
    static getAllTasks() {
        let filename=path.join(__dirname,'data','todos.json');
        let data=fsSync.readFileSync(filename);
        return JSON.parse(data);
    }

    // Add a new task
    static addTask(taskName) {
        let filename = path.join(__dirname,'data', 'todos.json');

        fs.readFile(filename, 'utf-8')
        .then((data)=>{
            data=JSON.parse(data);
            data.push(taskName);
            fs.writeFile(filename, JSON.stringify(data))
            .then(()=>{
                console.log('Task Added Successfully')
            })
            .catch((err)=>{
                console.log(err)
            })
        })
       
    }

    // Delete a task
    static deleteTask(taskName) {
        let filename = path.join(__dirname,'data', 'todos.json');

        fs.readFile(filename, 'utf-8')
        .then((data)=>{
            data=JSON.parse(data);
            data=data.filter(d=>d!=taskName);
            fs.writeFile(filename, JSON.stringify(data))
            .then(()=>{
                console.log('Task Deleted Successfully')
            })
            .catch((err)=>{
                console.log(err)
            })
        })
    }

    // Update a task by ID
    static updateTask(taskName, newTaskName) {
        let filename = path.join(__dirname,'data', 'todos.json');

        fs.readFile(filename, 'utf-8')
        .then((data)=>{
            data=JSON.parse(data);
            data = data.map(task => task === taskName ? newTaskName : task);
            fs.writeFile(filename, JSON.stringify(data))
            .then(()=>{
                console.log('Task Updated Successfully')
            })
            .catch((err)=>{
                console.log(err)
            })
        })
    }
}

// Example Usage:
// console.log('Adding tasks...');
// Todos.addTask("Cricket");
// Todos.addTask("Hockey");
// Todos.addTask("Coding");  

// console.log(Todos.getAllTasks());

// console.log('Updating task...');
Todos.updateTask("Cricket", "Read two books");

// console.log('Deleting a task...');
// Todos.deleteTask("Cricket");

// console.log('Tasks after update and deletion:', Todos.getAllTasks());
