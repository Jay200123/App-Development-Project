import React from "react";
import { Link } from "react-router-dom";

export default function Menu(){

    const style = {
        fontSize:16,
        margin:0
        

    }

    return(
        <div class="menu">
        <div class="dropdown">
          <button class="dropbtn">
          <i style={style} className="fa fa-list-ul" aria-hidden="true">Activities</i>
            <i class="fa fa-caret-down"></i>
          </button>

          <div class="dropdown-content">
            <a><i className="fa fa-file" aria-hidden="true"></i><Link to="/page">Page 1</Link></a>
            <a><Link>Hi!</Link></a>
            <a><Link>Hi!</Link></a>
          </div>
        </div>

        </div>
    )
}