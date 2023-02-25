import React from "react";
import "../App.css";
import uni from "./download.png";
import fcc from "./fcc_primary_small.svg";
import VanillaTilt from "vanilla-tilt";
import { Link } from "react-router-dom";

export const Home = ({ chooseNavbar }) => {
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
      <div className="flex-item bg-one tilt" >
        <Link to={"/read"} onClick={()=> chooseNavbar(1)}>
          <span>
            <img src={fcc} alt="fcc-logo" />
          </span>
          <h1 className="text">FreeCodeCamp</h1>
        </Link>
      </div>
      <div className="flex-item bg-two tilt" >
        <Link to={"/tutorials"} onClick={()=> chooseNavbar(2)}>
          <span>
            <img src={uni} alt="corn" />
          </span>
          <h1 className="text">BezKoder</h1>
        </Link>
      </div> 
    </div>
  );
};
