import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Button from "./components/Button/Button";
import Event from "./components/Event/Event";
import RemotePage from "./pages/Remote";
import InOGraph from "./pages/InOffice";
import NetworkingGraph from "./pages/Collab/NetworkingGraph";
import CollaborativePage from "./pages/Collaborative";

const attendees = [
  "John Doe",
  "Jane Smith",
  "Mike Johnson",
  "Emily Davis",
  "lorenzo",
  "aniketh",
  "carlos",
  "ved",
  "steven",
];
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/inperson" element={<InPerson />} /> */}
          <Route path="/remote" element={<RemotePage />} />
          <Route path="/inoffice" element={<InOGraph />} />
          <Route path="/collab" element={<CollaborativePage />} />
        </Routes>
      </BrowserRouter>

      {/* <div className="app">
      <div classname="event">
        <Event classname="dance" event_name={"Dance"} event_desc={"We boolin"} attendees={attendees}></Event>
      </div>
    </div> */}
    </>
  );
}

export default App;
