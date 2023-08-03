import React from "react";
import Navbar from "../components/Navbar";
import steam from "../images/steam-engine1.jpg"
import heading from "../images/main.jpg"
import edmund from "../images/edmund.jpg"
import loom from "../images/download.jpg"
import cotton  from "../images/cotton-gin.jpg"
import Footer from "../components/Footer"


export default function Page(){

    // const bg= {
    //     backgroundColor:"blue"
    // }

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

          <div className="content-right">

            <div className="right-info">
                <h3 className="right-header">Edmund Cartwright</h3>
                <p>(born April 24, 1743, Marnham, Nottinghamshire, Eng.—died Oct. 30, 1823, Hastings, Sussex), English inventor of the first wool-combing machine and of the predecessor of the modern power loom.Cartwright began his career as a clergyman, becoming, in 1779, rector of Goadby Marwood, Leicestershire; in 1786 he was a prebendary in Lincoln (Lincolnshire) cathedral. He probably would have spent his life as an obscure country clergyman had his attention not been turned to Sir Richard Arkwright’s cotton-spinning mills at Cromford, Derbyshire, which he saw on a visit in 1784. Inspired to construct a similar machine for weaving, he invented a crude power loom, first patented in 1785. </p>
            </div>
            <img className="edmun-img" src={edmund} alt="Industrial Revolution"/>

          </div>

          <div className="content-left">

          <img className="left-img" src={loom} alt="Industrial Revolution"/>

            <div className="left-info">
                <h3 className="left-header">The Power Loom</h3>
                <p> The first power loom was developed by Edmund Cartwright in 1784 and completed in 1785.  Edmund Cartwright was an English inventor and is remembered today for inventing the power loom along with other devices important to the textile industry in England.  A loom is a device that is used to weave together threads in order to produce a fabric.  Traditional handlooms were slow and required several laborers to operate.  Cartwright’s invention of the power loom was significant because it used mechanization to automate much of the weaving process.</p>
            </div>

          </div>

          <div className="content-right">

            <div className="right-info">
            <h3 className="right-header">The Cotton Gin</h3>
            <p>Machine for cleaning cotton of its seeds, invented in the United States by Eli Whitney in 1793. The cotton gin is an example of an invention directly called forth by an immediate demand; the mechanization of spinning in England had created a greatly expanded market for American cotton, whose production was inhibited by the slowness of manual removal of the seeds from the raw fibre. Whitney, a Massachusetts Yankee visiting a friend in the South, learned of the problem and quickly solved it. Inspired by manual brushes invented by enslaved workers, Whitney crafted a device that pulled the cotton through a set of wire teeth mounted on a revolving cylinder, the fibre passing through narrow slots in an iron breastwork too small to permit passage of the seed. The simplicity of the invention—which could be powered by people, animals, or water—caused it to be widely copied despite Whitney’s patent; it is credited with fixing cotton cultivation, virtually to the exclusion of other crops, in the U.S. South and so institutionalizing slavery.</p>
            </div>
            <img className="right-img" src={cotton} alt="Industrial Revolution"/>
          </div>

        </div>
        <Footer/>
        </main>
    )
}