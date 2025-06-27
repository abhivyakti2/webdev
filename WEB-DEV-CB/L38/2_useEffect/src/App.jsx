import { useEffect } from 'react'
import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)

  useEffect(()=>{
    let id=setInterval(()=>{
       setCount((prevCount)=>{
        console.log(prevCount);
        return prevCount+1;
       });
    },1000);

    return ()=>{
      console.log('Interval changes')
      // clearInterval(id);
    };
  },[])

  return (
    <div>{count}</div>
  )
}


