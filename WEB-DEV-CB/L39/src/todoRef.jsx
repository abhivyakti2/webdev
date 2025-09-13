import { useRef, useState } from "react"


export default function Todo(){
    const [todo, setTodo]=useState([]);
    const typed_text=useRef(null);

    function handleTodo(){
        const newTodo = typed_text.current.value.trim();
        if (newTodo !== "") {
           setTodo([...todo, newTodo]);
           typed_text.current.value = ""; // clear input after adding
        }
    }
    return(
        <>
        <h2>Todo List</h2>
        <input type="text" ref={typed_text} placeholder="Enter task"></input>
        <button onClick={handleTodo}> Add task </button>
        <ul>
        {todo.map((t,i)=>{
            return (
                <li key={i}>{t}</li>
            )
        })}
        </ul>
        </>
    );
}