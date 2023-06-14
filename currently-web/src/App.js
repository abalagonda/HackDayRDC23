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
const App = () => {
  return (
    <div className="app">

      {/* <Sidebar /> */}
      <Button />

      {/* Add the rest of your app's content here */}
    </div>
  );
};

export default App;

