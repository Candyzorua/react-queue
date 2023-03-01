import React from "react";

function Button(props) {
    
    return (
        <img className="circle-img" src={
            props.avail ? greenImg : redImg
        }/>
    );
}

export default Button;