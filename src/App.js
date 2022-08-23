import React, {useState} from "react";
import './App.css';
import BackEnd from "./components/BackEnd";
import FrontEnd from "./components/FrontEnd";
import {Collapse} from "react-daisyui";

function App() {
    const [tab, setTab] = useState(0)
  return (
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-lg">
              <div className="tabs tabs-boxed">
                  <a
                      className={`tab ${tab === 0 && 'tab-active'}`}
                      onClick={() => setTab(0)}>
                      <FrontEnd />
                  </a>
                  <a
                      className={`tab ${tab === 1 && 'tab-active'}`}
                      onClick={() => setTab(1)}>
                      <BackEnd />
                  </a>
              </div>
              <Collapse>
                  <Collapse.Title className="text-xl font-medium">
                      Focus me to see content
                  </Collapse.Title>
                  <Collapse.Content>
                      tabindex="0" attribute is necessary to make the div focusable
                  </Collapse.Content>
              </Collapse>
          </div>
        </div>
      </div>
  );
}

export default App;
