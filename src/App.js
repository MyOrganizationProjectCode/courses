import React from "react";
import './App.css';
import BackEnd from "./components/BackEnd";
import FrontEnd from "./components/FrontEnd";
<<<<<<< HEAD
=======
import {Button, Collapse, Navbar} from "react-daisyui";
>>>>>>> 5b182eaa8d386bbd8f5a7d8b5e641059ed88dd5f
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
