import { createRoot } from 'react-dom/client'

function Todo({name, description}){

  return(
        <li>
          {name}:{description}
        </li>
  );
}

function LoadTodos({todos}){     
  return <ul>
    {todos.map((todo, idx)=>(
      <Todo key={idx} name={todo.name} description={todo.description}/>
    ))}
  </ul>;
}

const todos=[
  { name: "Coding", description: "Love to Code"},
  { name: "Swim", description: "Love to Swim"},
  { name: "Dance", description: "Love to Dance"}
]

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
                                                  
  <div>
    {/* <App name ="Coding" description="Love to code"/> */}
    <h1>Todo Application</h1>
    {todos.length>0 ? (<LoadTodos todos={todos}/> ): <div>No todos available rightnow!</div>}
       
    {/* COMPONENT CALL */}
     
  </div>
)
