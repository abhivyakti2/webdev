import { useRef, useState } from "react";


// export default function Counter(){
//     let initialRef=useRef(0);
//     console.log("Component rendered");
//     function handleClick(){
//         initialRef.current=initialRef.current+1;
//         console.log("You've clicked " + initialRef.current + " times.");
//     }
//     return (
//         <button onClick={handleClick}>Click</button>
//     )
// }

// export default function Timer(){
//     const[startTime, setStartTime]=useState(null);
//     const[now, setNow]=useState(null);
//     const timerRef=useRef(null);
//     function handleStart(){
//         setStartTime(Date.now());
//         setNow(Date.now());
//         clearInterval(timerRef.current);
//         timerRef.current=setInterval(()=>{
//             setNow(Date.now());
//         },10) 
//     }
//     function handleStop(){
//         clearInterval(timerRef.current)
//     }
//     let timePassed= 0;
//     if(startTime!=null && now!=null){
//         timePassed=(now-startTime)/1000;
//     }
//     return (
//         <>
//         <div>Timer : {timePassed.toFixed(3)}</div>
//         <button onClick={handleStart}>Start</button>
//         <button onClick={handleStop}>Stop</button>
//         </>
//     )
    
// }

export default function Form() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleClick}>
        Focus the input
      </button>
    </>
  );
}
