import { useState } from 'react'
import TodoInput from './components/TodoInput';
import TodoDisplay from './components/TodoDisplay';

function App() {
  const [todos, setTodos] = useState([]);

  function addTodos(task){
    setTodos([...todos, {name : task, completed : false}]);
  }

  return (
    <>
      <TodoInput addTodos={addTodos}></TodoInput>
      <TodoDisplay todos={todos}></TodoDisplay>
    </>
  )
}

export default App
