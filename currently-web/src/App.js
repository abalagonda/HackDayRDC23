import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Button from './components/Button/Button';
import Event from './components/Event/Event'
import RemotePage from "./pages/Remote";

const attendees = ["John Doe", "Jane Smith", "Mike Johnson", "Emily Davis", "lorenzo", "aniketh", "carlos", "ved", "steven"];
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/remote" element={<RemotePage />} />
        
        <Route exact path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </BrowserRouter>

    {/* <div className="app">
      <div classname="event">
        <Event classname="dance" event_name={"Dance"} event_desc={"We boolin"} attendees={attendees}></Event>
      </div>
    </div> */}
  </>
  );
};

export default App;



