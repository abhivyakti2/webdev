import React from 'react'
import { useRef } from 'react'

const TodoInput = ({addTodos}) => {

    const inpRef= useRef();
    function addTodoHandler(){
        addTodos(inpRef.current.value);
        inpRef.current.value="";
    }
  return (
    <div>
      <input type="text" ref={inpRef} placeholder='Enter task...'/>
      <button onClick={addTodoHandler}>Add task</button>
    </div>
  )
}

export default TodoInput
