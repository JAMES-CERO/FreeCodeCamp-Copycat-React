import React from "react";
import '../styles-sheet/Data.css'

const Data = () => {
    return(
        <div className="data-box" >
            <img className="img-box"
                  src={require('../images/emma.png')}
                  alt="user-pic"/>
            <div className="testimony">
                <p className="user-name" > Emma Bostian in Sweden</p>
                <p className="user-occupation">"Software Engineer at Spotify</p>
                <p className="user-testimony">"I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."</p>
            </div>
        </div >
    )
}
 
export default Data