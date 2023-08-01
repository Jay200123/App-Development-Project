import React from "react";
import icon from "../images/download.png"
import { Link } from "react-router-dom";


function Navbar(){

    const links = {
        textDecoration:"none",
        color:"white",
        padding: 10,
        fontSize:15
    }

    return(
        <nav className="navbar">
            <img className="nav-img" src={icon} alt="App Development"/>
            <h3 className="nav-header">App Development and Emerging Technologies</h3> 
            <ul className="nav-menu">
                <li className="fa fa-home" aria-hidden="true">
                    <Link to="/" style={links}>Home</Link>
                </li>


                <li className="fa fa-info-circle" aria-hidden="true">
                    <Link to="/about" style={links}>About Us</Link>
                    </li>   

                <li className="fa fa-mobile" aria-hidden="true">
                    </li>Contact Us
            </ul>  
        </nav>
    )
}

export default Navbar
