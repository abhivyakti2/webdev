import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'


//VVIMP-------react only returns html, using functions of js 
function App(Task, Description){
  return(
    <div>
      <ul>
        <li>
          {Task}:{Description}
        </li>
      </ul>
    </div>
  );
}
function App1(props){
  console.log(props)
  const Task=props.name;
  const Description=props.description;
  return(
  
      <ul>
        <li>
          {Task}:{Description}
        </li>
      </ul>

  );
}
createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
                                                   //TWO WAYS TO CALL APP FUNCTION
  <div>
    {/* <App1 name ="Coding" description="Love to code"/> */}

    {App("Swim", "Love to swim")}       
  </div>
)


