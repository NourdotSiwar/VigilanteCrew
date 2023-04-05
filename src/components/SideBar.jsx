import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css'

const SideBar = () => {
      return (
            <div className="sideBarDiv">
                        <Link style={{color: 'white'}} to="/"><h1>Home</h1></Link>
                        <br></br>
                        <Link style={{color: 'white'}} to="/create"><h1>Create a Vigilante!</h1></Link>
                        <br></br>
                        <Link style={{color: 'white'}} to="/gallery"><h1>Vigilante Crew</h1></Link>
                  </div>
      )
}

export default SideBar;