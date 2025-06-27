import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import useTodos from './hooks/useTodos';
import { useState } from 'react';


function TodoInput({addTodo}){
  const [taskValue, setTaskValue]= useState("");
  let addTodosHandler=()=>{
    let filteredTaskValue=taskValue.trim();

    if(filteredTaskValue.length>0) {
      addTodo(filteredTaskValue);
      setTaskValue("");
    }
  };

  return (
    <div>
      <input onChange={(ev)=>{
          setTaskValue(ev.target.value)
      }} value={taskValue} type='text' placeholder='Enter New Task'>
        
      </input>
      <button onClick={addTodosHandler}>Add Task</button>
    </div>
  );
}

function TodoDisplay({todos, deleteTodos, incTodo, decTodo}){
  return(
    <div>
      <h2>Task List</h2>
      <div>
        {todos.map((t, idx)=>(
          <li key ={idx}>
            {t.name} - {t.date.toDateString()}
            <button onClick={()=>incTodo(t.id)}>⬆️</button>
            <button onClick={()=>deleteTodos(t.id)}>❌</button>
            <button onClick={()=>decTodo(t.id)}>⬇️</button>
          </li>
        ))}
      </div>
    </div>
  )
}

function TodoApp(){
  const {todos, addTodo, deleteTodos, incTodo, decTodo}= useTodos();

  return (
    <div>
      <h1>Todo Application</h1>
      <TodoInput addTodo={addTodo}/>

      <TodoDisplay incTodo={incTodo} decTodo={decTodo} deleteTodos={deleteTodos} todos={todos}/>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TodoApp />
  </StrictMode>,
)
