import React from "react";
import "../App.css";
import uni from "./download.png";
import fcc from "./fcc_primary_small.svg";
import VanillaTilt from "vanilla-tilt";

export const Home = () => {
  const tilt = document.querySelectorAll(".tilt");
  VanillaTilt.init(tilt, {
    reverse: true,
    max: 15,
    speed: 400,
    glare: true,
    reset: true,
    perspective: 500,
    transition: true,
    "max-glare": 0.75,
    "glare-prerender": false,
    gyroscope: true,
    gyroscopeMinAngleX: -45,
    gyroscopeMaxAngleX: 45,
    gyroscopeMinAngleY: -45,
    gyroscopeMaxAngleY: 45
  });

  return (
    <div className="flex-container">
      <div className="flex-item bg-one tilt" onClick={()=> localStorage.setItem('setnavbar', '1')}>
        <a href="/read">
          <span>
            <img src={fcc} alt="fcc-logo" />
          </span>
          <h1 className="text">FreeCodeCamp</h1>
        </a>
      </div>
      <div className="flex-item bg-two tilt" onClick={()=> localStorage.setItem('setnavbar', '2')}>
        <a href="/tutorials">
          <span>
            <img src={uni} alt="corn" />
          </span>
          <h1 className="text">BezKoder</h1>
        </a>
      </div> 
    </div>
  );
};
