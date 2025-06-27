import { useState } from "react";
import { v4 as uuidv4 } from "uuid";


export default function useTodos(initialTodos){
    const [todos, setTodos]= useState(initialTodos || []);

    function addTodo(todo){
       setTodos([...todos, {
        name: todo,
        id: uuidv4(),
        date: new Date()
       }])
    }

    function deleteTodos(id){
       setTodos((prevTodos)=>{
        return prevTodos.filter((t)=> t.id!==id)
       })
    }
    function incTodo(id){
        setTodos((prevTodos)=>{
            let idx = prevTodos.findIndex(t => t.id===id);
            if(idx>0 && idx<prevTodos.length){
                let newTodos= [...prevTodos];
                [newTodos[idx-1], newTodos[idx]]=[newTodos[idx], newTodos[idx-1]];
                
                return newTodos;
            }
            return prevTodos; // if priority can't be increased!!!!!!!! IMP Base Case
        })
    }
    function decTodo(id){
        setTodos((prevTodos)=>{
            let idx = prevTodos.findIndex(t => t.id===id);
            if(idx>=0 && idx<prevTodos.length-1){
                let newTodos= [...prevTodos];
                [newTodos[idx], newTodos[idx+1]]=[newTodos[idx+1], newTodos[idx]];
                return newTodos;
            }
            return prevTodos; // if priority can't be increased!!!!!!!! IMP Base Case
        })
    }

    return {todos, addTodo, deleteTodos, incTodo, decTodo}
}