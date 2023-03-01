import React, { useState } from "react";
import Counter from "./Counter";
import CustDisplay from "./CustDisplay";

function App() {
    const [waitingList, setWaitingList] = useState([]);
    const [latestNum, setLatestNum] = useState(0);
    const [currNum, setCurrNum] = useState(0);
    var nextNum = waitingList[0];
    
    

    function addCust() {
        setLatestNum(latestNum + 1)
        setWaitingList([...waitingList, latestNum]);
    }

    function serveCust() {
        if (waitingList.length !== 0) {
            setWaitingList(waitingList => waitingList.filter(num => num !== nextNum));
            return (nextNum + 1);
        } else {
            return "--";
        }
    }

    function emptyWaitingList() {
        return waitingList.length === 0
    }

    return (
        <div>
            <CustDisplay fn={addCust} empty={emptyWaitingList} latestServingNum={currNum} lastIssuedNum={latestNum}/>
            <Counter fn={serveCust} setCurr={setCurrNum} counterNum="1"/>
            <Counter fn={serveCust} setCurr={setCurrNum} counterNum="2"/>
            <Counter fn={serveCust} setCurr={setCurrNum} counterNum="3"/>
            <Counter fn={serveCust} setCurr={setCurrNum} counterNum="4"/>
        </div>
    );
}

export default App;