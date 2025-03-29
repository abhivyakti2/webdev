const fs = require('fs');
const path = require('path');

const FILE_PATH = path.join(__dirname, 'todos.json');

class Todos {
    // Get all tasks
    static getAllTasks() {
        try {
            return JSON.parse(fs.readFileSync(FILE_PATH, 'utf8'));
        } catch (error) {
            return []; // Return empty array if file doesn't exist or error occurs
        }
    }

    // Add a new task
    static addTask(taskName) {
        let todos = Todos.getAllTasks();
        let newTask = { id: todos.length ? todos[todos.length - 1].id + 1 : 1, task: taskName };
        todos.push(newTask);
        fs.writeFileSync(FILE_PATH, JSON.stringify(todos, null, 2), 'utf8');
        return newTask;
    }

    // Delete a task by ID
    static deleteTask(id) {
        let todos = Todos.getAllTasks();
        let filteredTodos = todos.filter(task => task.id !== id);
        if (todos.length !== filteredTodos.length) {
            fs.writeFileSync(FILE_PATH, JSON.stringify(filteredTodos, null, 2), 'utf8');
            return true;
        }
        return false;
    }

    // Update a task by ID
    static updateTask(id, newTaskName) {
        let todos = Todos.getAllTasks();
        let task = todos.find(task => task.id === id);
        if (task) {
            task.task = newTaskName;
            fs.writeFileSync(FILE_PATH, JSON.stringify(todos, null, 2), 'utf8');
            return task;
        }
        return null;
    }
}

// Example Usage:
console.log('Adding tasks...');
console.log(Todos.addTask('Cricket'));
console.log(Todos.addTask('Hockey'));
console.log(Todos.addTask('Coding'));

console.log('All tasks:', Todos.getAllTasks());

console.log('Updating task...');
console.log(Todos.updateTask(1, 'Read two books'));

console.log('Deleting a task...');
console.log(Todos.deleteTask(2));

console.log('Tasks after update and deletion:', Todos.getAllTasks());
