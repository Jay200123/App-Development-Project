import React from "react";

export default function Profile(data){
    console.log(data)

    return(
        <main>

        <div className="profile-container">
            
        <img className="profile-img" src={data.image}  alt="User Profile"/>

        <div className="profile-information">
        <h2 className="profile-title">{data.header}</h2>
        <p className="profile-info">Hello and welcome! I'm {data.name} and {data.description}</p>

        <h2 className="profile-title">{data.background}</h2>
        <p>Im a {data.year} from {data.University}. Currently {data.degree}. My Hobbies are {data.hobbies}</p>
        </div>

       </div>

        </main>
    )
}