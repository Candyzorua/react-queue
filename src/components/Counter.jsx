import React, { useState } from "react";
import Light from "./Light"

function Counter(props) {

    const [currNum, setCurrNum] = useState(0);
    const [serv, setServ] = useState(true);

    function toggleServ() {
        if (serv) {
            setCurrNum(props.fn() + 1);
            setServ(false);
        } else {
            setServ(true);
        }
    }

    return (
        <div className="card">
            <h1>Counter {props.counterNum}</h1>
            <h2>{currNum}</h2>
            <Light fn={toggleServ} avail={serv}/>
        </div>
    );
}

export default Counter;