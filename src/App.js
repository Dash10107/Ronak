import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Home from "./Components/Home";
import Birthday from "./Components/Birthday";
import Hackathon from "./Components/Hackathon";
import Fest from "./Components/Fest";
import Memories from "./Components/Memories";

function App() {
  return ( 
    <>
    <Router>
     <Routes>
     <Route  path="/" element={<Home />} />
        <Route  path="/birthday" element={<Birthday />} />
        <Route  path="/hackathon" element={<Hackathon />} />
        <Route  path="/fest" element={<Fest />} />
        <Route  path="/memories" element={<Memories />} />
       </Routes>
    </Router>
  </>
  );
}

export default App;

