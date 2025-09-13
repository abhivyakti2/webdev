// import Home from "./components/Home";
// import About from "./components/About";
// import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import Centers from "./components/Centers";
import TeamPlayer from "./components/TeamPlayer";
import Team from "./components/Team";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  return (
    <div>
      <Navbar />
      <Suspense fallback={<div>Loading page.....</div>}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}>
            <Route path="team" element={<Team />}></Route>
            <Route path="team/:id" element={<TeamPlayer />} />
            <Route path="centers" element={<Centers />}></Route>
          </Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
