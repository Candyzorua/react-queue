import React, { useState } from "react";

function CustDisplay(props) {

    return (
        <div className="cust-display">
            <h1>Now Serving: {props.latestServingNum}</h1>
            <h2>Last Number: {props.lastIssuedNum}</h2>
        </div>
    );
}

export default CustDisplay;