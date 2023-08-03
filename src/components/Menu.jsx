import React from "react";

export default function Menu(){

    const style = {
        fontSize:15,
        margin:5
        

    }

    return(
        <div class="menu">
        <div class="dropdown">
          <button class="dropbtn">
          <i style={style} className="fa fa-list-ul" aria-hidden="true"></i>Activities
            <i class="fa fa-caret-down"></i>
          </button>

          <div class="dropdown-content">
            <a> test test test</a>
          </div>
        </div>

        </div>
    )
}