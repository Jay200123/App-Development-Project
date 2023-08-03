import {React, useState} from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Profile from "./Profile";
import Data from "../data"

export default function About(){

    const [profile, setProfile] = useState(Data)

    const newProfile = profile.map((data)=>{

        return <Profile {...data}/>
    })

    return(
        <div>
            <Navbar/>
            {newProfile}
            <Footer/>
        </div>
    )
}