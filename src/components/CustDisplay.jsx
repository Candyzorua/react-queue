import React from "react";

/**
     * Customer user terminal 
     */

function CustDisplay(props) {

    return (
        <div className="cust-display">
            {(props.currNum === 0) ? <h1>Now Serving: --</h1> : <h1>Now Serving: {props.currNum}</h1>}
            <h2>Last Number: {(props.latestNum === 0) ? "--" : props.latestNum}</h2>
            <button onClick={props.addCust}>Take a number</button>
        </div>
    );
}

export default CustDisplay;