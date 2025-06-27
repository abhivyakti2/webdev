import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import useCounter from './hooks/useCounter';
import useAdvCnt from './hooks/useAdvancedCounter';

function NaiveApp(){
  const [cnt, setCnt]=useCounter(4);
  return(
    <div>
      <button onClick={setCnt}> Update </button>
      <span>{cnt}</span>
    </div>
  )
}


function App(){
  const {cnt, inc, dec, reset}=useAdvCnt(4);
  return(
    <div>
      <button onClick={inc}> Increment </button>
      <button onClick={dec}> Decrement </button>
      <button onClick={reset}> Reset </button>
      <span>   {cnt}   </span>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
