import React, { useState } from "react";

function CustDisplay(props) {

    /**
     * Customer user terminal 
     */
    return (
        <div className="cust-display">
            {(props.empty() || props.latestServingNum == 0) ? <h1>Now Serving: --</h1> : <h1>Now Serving: {props.latestServingNum}</h1>} 
            <h2>Last Number: {props.lastIssuedNum}</h2>
            <button onClick={props.fn}>Take a number</button>
        </div>
    );
}

export default CustDisplay;