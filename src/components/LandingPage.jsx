import React from "react";
import test from "../images/industrial-icon.jpg"
import test2 from "../images/industrial.jpeg"

function LandingPage(){

    return(
        <main>
             <div className="container">
            <div className="container-header">
                <h1>The Industrial Revolution</h1>
                <p className="text">The process of change from an agrarian and handicraft economy to one dominated by industry and machine manufacturing. These technological changes introduced novel ways of working and living and fundamentally transformed society.</p>
                <p className="small-heading">By: Renyel Jay Sioc, Janna Fidel</p>
            </div>
            <img className="page-img" src={test} alt="Test Test Test"/>
        </div>

        <div className="container">
        <img className="page-img" src={test2} alt="Test Test Test"/>  
            <div className="container-header">
            <h1>History</h1>
                <p className="text">Though a few innovations were developed as early as the 1700s, the Industrial Revolution began in earnest by the 1830s and 1840s in Britain, and soon spread to the rest of the world, including the United States.Modern historians often refer to this period as the First Industrial Revolution, to set it apart from a second period of industrialization that took place from the late 19th to early 20th centuries and saw rapid advances in the steel, electric and automobile industries. </p>
            </div>
        </div>
        </main>

    )
}

export default LandingPage