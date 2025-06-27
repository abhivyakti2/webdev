const fsSync=require('fs');
const path=require('path');
const fs=require('fs/promises');

class Todos{

    static addTask(name){
        let filename= path.join(__dirname, 'data', 'todos.json');
        fs.readFile(filename, 'utf-8')    // IF FILE DOESN't !!!!EXIST OR EMPTY!!!! SEPERATE CODE REQUIRED OR MANUAL METHODS 
        .then((data)=>{
            data=JSON.parse(data);
            data.push(name);    //ONLY IF JSON HAS ARRAY[], not object{}
            fs.writeFile(filename, JSON.stringify(data))
            .then(()=>{
                console.log("Task added successfully");
            })
            .catch((err)=>{console.log(err)})
        })
    }

    static getAllTasks(){
        let filename= path.join(__dirname, 'data', 'todos.json');
        fs.readFile(filename, 'utf-8')
        .then((data)=>{
            console.log(JSON.parse(data));
        })
        .catch((err)=>{
            console.log(err.message);
        })
        console.log(JSON.parse(data));
    }

    static deleteTask(taskName){
        let filename= path.join(__dirname, 'data', 'todos.json');
        fs.readFile(filename, 'utf-8')    // IF FILE DOESN't !!!!EXIST OR EMPTY!!!! SEPERATE CODE REQUIRED OR MANUAL METHODS 
        .then((data)=>{
            data=JSON.parse(data);
            data=data.filter(d=>d!=taskName);
            fs.writeFile(filename, JSON.stringify(data))
            .then(()=>{
                console.log("Todo deleted successfully");
            })
            .catch((err)=>{console.log(err)})
        })
    }

    static updateTask(oldName, newName){
        let filename= path.join(__dirname, 'data', 'todos.json');
        fs.readFile(filename, 'utf-8')    // IF FILE DOESN't !!!!EXIST OR EMPTY!!!! SEPERATE CODE REQUIRED OR MANUAL METHODS 
        .then((data)=>{
            data=JSON.parse(data);
            data=data.map(d => d === oldName ? newName : d);
            fs.writeFile(filename, JSON.stringify(data))
            .then(()=>{
                console.log("Todo updated successfully");
            })
            .catch((err)=>{console.log(err)})
        })
    }


}



Todos.updateTask('Code', 'Coding');

