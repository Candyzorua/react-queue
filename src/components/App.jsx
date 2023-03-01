import React, { useState } from "react";
import Counter from "./Counter";
import CustDisplay from "./CustDisplay";

function App() {
    const [waitingList, setWaitingList] = useState([]);
    const [latestNum, setLatestNum] = useState(0);
    var currNum = waitingList[0];

    function addCust() {
        setLatestNum(latestNum + 1)
        setWaitingList([...waitingList, latestNum]);
    }

    function serveCust() {
        if (waitingList.length !== 0) {
            setWaitingList(waitingList => waitingList.filter(num => num !== currNum));
            return currNum;
        }
    }

    function emptyWaitingList() {
        return (waitingList.length === 0)
    }

    return (
        <div>
            <CustDisplay fn={addCust} empty={emptyWaitingList} latestServingNum={currNum} lastIssuedNum={latestNum}/>
            <Counter fn={serveCust} counterNum="1"/>
            <Counter fn={serveCust} counterNum="2"/>
            <Counter fn={serveCust} counterNum="3"/>
            <Counter fn={serveCust} counterNum="4"/>
        </div>
    );
}

export default App;