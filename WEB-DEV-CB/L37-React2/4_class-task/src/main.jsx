import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { useState } from "react";

// const allTopics = ["Arrays", "LinkedList", "Strings", "Trees"];

// function TopicSelector({ selectedTopics, toggleTopic }) {
//   return (
//     <div>
//       <h2>Available Topics</h2>
//       <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
//         {allTopics.map((topic, index) => (
//           <li key={index}>
//             <input
//               type="checkbox"
//               checked={selectedTopics.includes(topic)}
//               onChange={() => toggleTopic(topic)}
//             />
//             {" "}{topic}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// function SelectedTopics({ selectedTopics }) {
//   return (
//     <div>
//       <h2>Selected Topics</h2>
//       <ul>
//         {selectedTopics.map((topic, index) => (
//           <li key={index}>{topic}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// function TopicsApp() {
//   const [selectedTopics, setSelectedTopics] = useState([]);

//   const toggleTopic = (topic) => {
//     if (selectedTopics.includes(topic)) {
//       setSelectedTopics(selectedTopics.filter((t) => t !== topic));
//     } else {
//       setSelectedTopics([...selectedTopics, topic]);
//     }
//   };

//   return (
//     <div>
//       <h1>Topic Selection App</h1>
//       <TopicSelector selectedTopics={selectedTopics} toggleTopic={toggleTopic} />
//       <SelectedTopics selectedTopics={selectedTopics} />
//     </div>
//   );
// }

const allTopics = ["Arrays", "LinkedList", "Strings", "Trees"];

function App(){
  const [selected, setSelected]=useState([]);
  const topics = ["Arrays", "LinkedList", "Strings", "Trees"];
  return (
    <div>
      {
        topics.map((t, idx)=>{
          return(
            <div key={idx}>
              <input type="checkbox" value={t} onChange={(ev)=>{
                let alreadyPresent= selected.includes(ev.target.value);
                if(alreadyPresent){
                  setSelected((prevTopics)=>{
                    return prevTopics.filter((t)=>t!==ev.target.value)
                  })
                }
                else{
                  setSelected([...selected, ev.target.value])
                }
              }}/>{" "} {t}
            </div>
          )
        })
      }
      <h1>Selected topics</h1>
      <div>
        {selected.map((t, idx)=>{
          return <li key={idx}>{t}</li>
        })}
      </div>
    </div>
  )
  
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
