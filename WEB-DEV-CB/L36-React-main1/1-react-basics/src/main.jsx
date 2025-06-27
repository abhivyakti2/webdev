import { createRoot } from 'react-dom/client'
import { useState } from 'react';


function NonRenderingComponent(){
     let counter = 1;
    return (
    <div>
    <h1>Simple Counter - NonRendering component</h1>

    <span>{counter}</span> &nbsp;    &nbsp;    &nbsp;    &nbsp;

    <button onClick={()=>{
        counter++;
        console.log(counter)
    }}
    >
      ⬆️
    </button>
  </div>)
}



function ReRenderingComponent(){
    const [counter, setCounter]=useState(1);
    return (
    <div>
    <h1>Simple Counter - ReRendering component</h1>


{/* <button onClick={()=>{
        counter--;
        console.log(counter)
    }}
    >⬇️</button>

    &nbsp;    &nbsp;    &nbsp;    &nbsp; */}
&nbsp;    &nbsp;    &nbsp;    &nbsp;
    <span>{counter}</span> &nbsp;    &nbsp;    &nbsp;    &nbsp;

    <button onClick={()=>{
        setCounter(counter+1);
        console.log(counter)
    }}
    >
      ⬆️
    </button>
  </div>)
}



createRoot(document.getElementById('root')).render(
  <div>{true? <ReRenderingComponent/>:<NonRenderingComponent/>}</div>
);

