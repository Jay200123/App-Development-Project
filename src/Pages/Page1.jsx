import React from "react";
import Navbar from "../components/Navbar";
import steam from "../images/steam-engine1.jpg"
import heading from "../images/main.jpg"
export default function Page(){

    return(
        <main>
            <Navbar/>
        <div className="page-container">
          <h1>The First Industrial Revolution</h1>
          <img className="heading-img" src={heading} alt="Industrial Revolution"/>

          <div className="text-page">
          <p className>The First phase of Industrial Revolution occured in the late 18th century and early 19th centuries, and was characeterized by the development of new machines and technologies that transformed the manufacturing process. Some of the key inventions in this era included the steam engine, spinning jenny, power loom and cotton gin.</p>
          <p>These innovations allowed for mass production and increased efficiency, leading to the growth of factories and the rise of industrial capitalism. The First Industrial Revolution had a profound impact on society, transforming the way people lived and worked and laying the foundation for modern industry.</p>
          </div>
          
          <div className="content-left">
          <img className="left-img" src={steam} alt="The First Industrial Revolution"/>
            <div className="left-info">
            <h3 className="left-header">The First Steam Engine</h3>
            <p>Steam power originally developed slowly over a period of several hundred years, progressing through expensive and fairly limited devices in the early 17th century, until it reached to actually practical applications at the beginning of the Industrial Revolution. The steam engine was one of the most important technologies of the Industrial Revolution. It was a simple device that used boiling water to create mechanical motion to be utilized in useful work.The steam engine was used in many industrial settings, especially mining, where the first engines pumped water from deep workings. Early mills had run successfully with water power, but by using a steam engine a factory could be located anywhere, not just near water. Water power varied with the seasons, and was not available at times due to freezing, floods and dry spells.</p>
            </div>

          </div>
        </div>

        </main>
    )
}