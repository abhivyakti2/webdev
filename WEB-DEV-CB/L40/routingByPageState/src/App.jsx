import { useState } from 'react'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';


function App() {
  // return (
  //   <>
  //   <a href="/home">Home</a>
  //   <a href="/about">About</a>
  //   <a href="/contact">Contact Us</a>
  //   </>
  // )


  const [currPage, setCurrPage] = useState("home");
  return (
    <>
    <div>
      <button onClick={()=>setCurrPage('home')}>Home</button>
    <button onClick={()=>setCurrPage('about')}>About Us</button>
    <button onClick={()=>setCurrPage('contact')}>Contact Us</button>
    </div>
    {currPage=="home" && <Home/>}
    {currPage=="about" && <About/>}
    {currPage=="contact" && <Contact/>}
    
    </>
  )
}

export default App
