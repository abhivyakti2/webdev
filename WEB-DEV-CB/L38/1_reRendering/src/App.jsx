import { memo, useState } from 'react'


const Child=memo(function({data}){
  console.log('Running', data);
  return <div>I am child : {data} </div>
})

export default function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
    <Child data={count}/>
    <button onClick={()=>setCount(count+1)}>+</button>
    <Child data='Hello'/>
    <Child data='World'/>      
    </>
  )
}

