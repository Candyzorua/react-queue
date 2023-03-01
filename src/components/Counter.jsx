import React, { useState } from "react";
import Light from "./Light"

function Counter(props) {

    const [currNum, setCurrNum] = useState(0);
    const [serv, setServ] = useState(true);

    function toggleServ() {
        if (serv) {
            setServ(false);
        } else {
            setServ(true);
        }
    }

    return (
        <div className="card">
            <h1>Counter {props.counterNum}</h1>
            <h2>{currNum}</h2>
            <Light avail={serv}/>
        </div>
    );
}

export default Counter;