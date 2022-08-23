import React, {useState} from "react";
import './App.css';
import BackEnd from "./components/BackEnd";
import FrontEnd from "./components/FrontEnd";
import {Button, Collapse, Navbar} from "react-daisyui";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
      <BrowserRouter>
          <div className="flex w-full component-preview p-4 bg-primary items-center justify-center gap-2 font-sans">
              <Navbar>
                  <Button className="text-xl normal-case" color="ghost">
                      D-study
                  </Button>
              </Navbar>
          </div>
          <Routes>
              <Route path={'/'} element={<Home />} />
              <Route path={'/frontend'} element={<FrontEnd />} />
              <Route path={'/backend'} element={<BackEnd />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
