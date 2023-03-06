import React from "react";

/**
     * Customer user terminal 
     */

function CustDisplay(props) {

    return (
        <div className="cust-display">
            {(props.latestServingNum === 0) ? <h1>Now Serving: --</h1> : <h1>Now Serving: {props.latestServingNum}</h1>}
            <h2>Last Number: {(props.lastIssuedNum === 0) ? "--" : props.lastIssuedNum}</h2>
            <button onClick={props.fn}>Take a number</button>
        </div>
    );
}

export default CustDisplay;