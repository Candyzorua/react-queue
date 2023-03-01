import React from "react";
function Light(props) {

    const greenImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQLwn1fALSIerHcUplcTfZLjxfcgoOVQOSK1eMrhl3yQ&s";
    const redImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX/AAAZ4gk3AAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC";
    
    /**
     * Returns a green light if avail is true and red if it is false
     */
    return (
        <img onClick={props.fn} className="circle-img" src={
            props.avail ? greenImg : redImg
        }/>
    );
}

export default Light;