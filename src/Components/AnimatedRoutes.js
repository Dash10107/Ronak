import React from 'react'
import Home from "./Home";
import Birthday from "./Birthday";
import Hackathon from "./Hackathon";
import Fest from "./Fest";
import Memories from "./Memories";

import {Route, Routes,useLocation} from "react-router-dom";
import {AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
    const location = useLocation();
  return (
    <AnimatePresence>
    <Routes location={location} key={location.pathname}>
    <Route  path="/" element={<Home />} />
       <Route  path="/birthday" element={<Birthday />} />
       <Route  path="/hackathon" element={<Hackathon />} />
       <Route  path="/fest" element={<Fest />} />
       <Route  path="/memories" element={<Memories />} />
      </Routes>
      </AnimatePresence>
  )
}

export default AnimatedRoutes