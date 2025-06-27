// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'


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
    
    <LoadTodos todos={todos}/>    
    {/* COMPONENT CALL */}
     
  </div>
)
