import React from 'react'

const TodoDisplay = ({todos}) => {
  return (
    <div>
      {todos.map((t,i)=>(
        <li key={i}>
            {t.name} : {" "} {t.completed ? 'Completed' : 'Pending'}
        </li>
      ))}
    </div>
  )
}

export default TodoDisplay
