import React, { useState, useEffect } from "react";
import "./Tabs.css";

const Tabs = () => {
  const [toggleState, setToggleState] = useState(() => {
    return parseInt(localStorage.getItem('lastActiveTab')) || 1;
  });

  const toggleTab = (index) => {
    setToggleState(index);
    localStorage.setItem('lastActiveTab', index);
  };

  return (
    <div>
      <div className="container">
        <div className="bloc-tabs">
          <button className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'} 
          onClick={() => toggleTab(1)}>
            tab 1
          </button>
          <button className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'} 
          onClick={() => toggleTab(2)}>
            tab 2
          </button>
          <button className={toggleState === 3 ? 'tabs active-tabs' : 'tabs'} 
          onClick={() => toggleTab(3)}>
            tab 3
          </button>
        </div>
        <div className="content-tabs">
          <div className={toggleState === 1 ? 'content active-content' :  'content'}>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, officia!</p>
          </div>
          <div className={toggleState === 2 ? 'content active-content' :  'content'}>
            <p>Lorem, ipsum dolor.</p>
          </div>
          <div className={toggleState === 3 ? 'content active-content' :  'content'}>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
