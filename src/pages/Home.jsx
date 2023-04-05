import React from "react";
import "./Home.css";
import BatFam from "../images/batfam.png";
import logos from "../images/logos.png";

const Home = () => {
      return (
          <div className="homeDiv">
          <img className="homeLogo" src={logos} alt="Vigilante Crew Logo" />
          <h1 className="homeTitle">Welcome to the Vigilante Crew Builder!</h1>
          <h2 className="homeSubTitle">Here is where you can create your own crew of vigilantes!</h2>
          <img className="homeImage" src={BatFam} alt="Batman Family" />
          </div>
      );
    };
    
    export default Home;