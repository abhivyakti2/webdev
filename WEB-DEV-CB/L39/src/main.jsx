import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import Timer from './2_useRef.jsx'
import Todo from './todoRef.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Counter /> */}
    {/* <Timer /> */}
    {/* <Form/> */}
    <Todo/>
  </StrictMode>,
)
