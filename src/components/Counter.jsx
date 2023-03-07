import React, { useState } from "react";
import Light from "./Light"

/**
* Counter with clickable button to complete current task or accept new number
*/

function Counter(props) {

    const [currNum, setCurrNum] = useState(0);
    const [serv, setServ] = useState(true);

    function toggleServ() {
        if (serv) {
            var num = props.serveCust(); 
            setCurrNum(num);
            setServ(false);
        } else {
            setServ(true);
        }
    }

    return (
        <div className="card">
            <h1>Counter {props.counterNum}</h1>
            <h2>{(currNum === 0) ? "--" : currNum}</h2>
            <Light toggleServ={toggleServ} avail={serv} />
        </div>
    );
}

export default Counter;