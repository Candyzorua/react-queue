import React from "react";
import Counter from "./Counter";
import CustDisplay from "./CustDisplay";

function App() {
    return (
        <div>
            <CustDisplay latestServingNum="2" lastIssuedNum="3"/>
            <Counter counterNum="1"/>
            <Counter counterNum="2"/>
            <Counter counterNum="3"/>
            <Counter counterNum="4"/>
        </div>
    );
}

export default App;