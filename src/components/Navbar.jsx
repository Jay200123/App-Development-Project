import React from "react";
import icon from "../images/download.png"

function Navbar(){

    return(
        <nav className="navbar">
            <img className="nav-img" src={icon} alt="App Development"/>
            <h3 className="nav-header">App Development Project</h3> 

            <ul className="nav-menu">
                <li className="fa fa-home" aria-hidden="true"></li>Home
                <li className="fa fa-info-circle" aria-hidden="true"></li>About
                <li className="fa fa-mobile" aria-hidden="true"></li>Contact Us
            </ul>  
        </nav>
    )
}

export default Navbar
