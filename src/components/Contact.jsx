import React from "react"
import Navbar from "./Navbar"
import icon from "../images/download (1).png"


export default function Contact(){

    return(
        <main>
    <Navbar/>
        
     <div className="contact-forms">

        <div className="form-headers">
            <img className="forms-img" src={icon} alt="React Icon"/>
            <h3>React Forms</h3>
        </div>

        <form>
            <div>
                <label>First Name</label>
                <input type="text" className="form-control" name="fname"  placeholder="Input Text"/>
            </div>

            <div>
                <label>Middle Name</label>
                <input type="text" className="form-control" name="middle"   placeholder="Input Text"/>
            </div>

            <div>
                <label>Last Name</label>
                <input type="text" className="form-control" name="lname"   placeholder="Input Text"/>
            </div>

            <div>
                <label>Comments</label>
                <textarea className="text-control" name="comments"   placeholder="Comments and Suggestions..."/>
            </div>
        </form>

</div>
        </main>
    )
}
