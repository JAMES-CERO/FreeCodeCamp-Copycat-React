import React from "react";

const Data = () => {
    return(
        <div className="data-box" >
            <img className="img-box"
                  src={require('../images/emma.png')}
                  alt="user-pic"/>
            <div className="testimony">
                <p className="user-name" ></p>
                <p className="user-occupation"></p>
                <p className="user-testimony"></p>
            </div>
        </div >
    )
}
 
export default Data