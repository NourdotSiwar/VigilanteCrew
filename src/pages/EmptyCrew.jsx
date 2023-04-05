
import React from 'react';
import { Link } from 'react-router-dom';
import './EmptyCrew.css';
import logos from "../images/logos.png";


const EmptyCrew = () => {

return (

<div className="emptyCrew">
<img className="Logo" src={logos} alt="Vigilante Crew Logo" />
<h1>Your Crew is Empty!</h1>
<h2><Link style={{color: 'white', textShadow: '0 0 2px white', textDecoration: 'none'}}
            to={'/create'}> Create a Vigilante Here</Link></h2>
</div>

);

}

export default EmptyCrew;