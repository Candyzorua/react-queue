import React, { useState } from "react";
import Counter from "./Counter";
import CustDisplay from "./CustDisplay";

function App() {
    const [latestNum, setLatestNum] = useState(0);
    const [currNum, setCurrNum] = useState(0);

    /**
     * increments the latest ticket number taken and returns it
     * @returns int
     */
    function addCust() {
        setLatestNum(latestNum + 1)
        return latestNum;
    }

    /**
     * increments the current number of the customer being served and returns it
     * @returns int
     */
    function serveCust() {
        if (!emptyWaitingList()) {
            setCurrNum(currNum + 1)
            return (currNum + 1);
        } else return "--";
    }

    /**
     * returns true if the waiting list is empty
      * @returns boolean
     */
    function emptyWaitingList() {
        return currNum === latestNum;
    }

    return (
        <div>
            <CustDisplay addCust={addCust} empty={emptyWaitingList} currNum={currNum} latestNum={latestNum} />
            <Counter serveCust={serveCust} setCurrNum={setCurrNum} counterNum="1" />
            <Counter serveCust={serveCust} setCurrNum={setCurrNum} counterNum="2" />
            <Counter serveCust={serveCust} setCurrNum={setCurrNum} counterNum="3" />
            <Counter serveCust={serveCust} setCurrNum={setCurrNum} counterNum="4" />
        </div>
    );
}

export default App;