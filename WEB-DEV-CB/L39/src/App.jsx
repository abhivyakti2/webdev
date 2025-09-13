import { useContext } from 'react';
import { createContext } from 'react'
import { useState } from 'react'

const dataContext=createContext(0);

const Child=()=>{
   const value=useContext(dataContext);
   console.log(value);
   
   return (
    <div>I'm child in app : {value}
    <GrandChild/></div>
  )
}

const GrandChild=()=>{
  const value=useContext(dataContext);
   console.log(value);
  return (
    <div>I'm grandchild in child: {value}</div>
  )
}

const Parent=()=>{
  const value=useContext(dataContext);
   console.log(value);
  return (
    <div>I'm parent in app: {value}</div>
  )
}

export default function App() {

  return (
    <>
    App Component
    <dataContext.Provider value={10}>
      <Child></Child>
      <Parent></Parent>
    </dataContext.Provider> 
    </>
  )
}

