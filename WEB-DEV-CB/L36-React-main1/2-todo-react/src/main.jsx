import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'


function TodoInput({todos, setTodos, taskValue, setTaskValue}){
  const addTodosHelper=(ev)=>{
    ev.preventDefault();
    //  console.log("You're adding", taskValue);
    setTodos([...todos, taskValue])
  }
  return (
    <form action="#" onSubmit={addTodosHelper}>
        <input onChange={(ev)=>{
          // console.log(ev.target.value)
          setTaskValue(ev.target.value)
        }} type="text" name="task" id="task" placeholder='Enter Task name'/><br/>
        <button type="submit">Add task</button>
      </form>
  );
}

function TodoDisplay({todos}){
  return (<ul className="taskList"> 
          {todos.map((todo, idx)=> <li key="idx">
                {todo}
              </li>
          )}

        </ul>);
}


function TodoApp(){
  const [todos, setTodos]= useState([]);
  const [taskValue, setTaskValue]= useState("");

   return (
    <div>
      <h1>Todo Application</h1>


      <TodoInput todos={todos} setTodos={setTodos} taskValue={taskValue} setTaskValue={setTaskValue}/>
      <TodoDisplay todos={todos}/>
        
    </div>
   
   )
}
                                              //can't write class instead of className!!!!!!!!!!!!!!!!!!!!!!!!!

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TodoApp />
  </StrictMode>,
)


        // <input type="text" name="description" id="description" placeholder='Enter Task description'/><br/>
