// import logo from "./logo.svg";
// import "./App.css";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route exact path="*" element={<Home />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


// import { Sidebar } from "react-pro-sidebar";
// import Map from "../../components/Map";
// const Home = () => {
//   return (
//     <div>
//       <Sidebar>Hello</Sidebar>
//       <Map />{" "}
//     </div>
//   );
// };
// export default Home;

import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Button from './components/Button/Button';
import Event from './components/Event/Event'

const attendees = ["John Doe", "Jane Smith", "Mike Johnson", "Emily Davis", "lorenzo", "aniketh", "carlos", "ved", "steven"];

const App = () => {

  return (
    <div className="app">

      {/* <Sidebar /> */}
      {/* const e1 = new Event("Lunch w the Founder", "come join us on the quad fool");
      const e2 = new Event("Movie", "pull up cuh"); */}
      <div classname="event">

        <Event classname="dance" event_name={"Dance"} event_desc={"We boolin"} attendees={attendees}></Event>
      </div>
      {/* <div classname="event">
        <Event classname="dance" event_name={"Coffee"} event_desc={"We boolin"} attendees={["jgew fejhwiofj"]}></Event>
      </div> */}
      {/* <Event name={"Ride"} description={"We boolin"}></Event> */}
      {/* <e1 />
      <e2 /> */}
      {/* <Button /> */}
      {/* Add the rest of your app's content here */}
    </div>
  );
};

export default App;



