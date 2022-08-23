import React, {useState} from "react";
import './App.css';
import BackEnd from "./components/BackEnd";
import FrontEnd from "./components/FrontEnd";
import {Collapse} from "react-daisyui";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";

function App() {
    const [tab, setTab] = useState(0)
  return (
      <BrowserRouter>
          <Routes>
              <Route path={'/'} element={<Home />} />
              <Route path={'/frontend'} element={<FrontEnd />} />
              <Route path={'/backend'} element={<BackEnd />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
