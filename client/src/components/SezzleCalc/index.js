import React, { useState, useEffect } from 'react';
import socket from '../../utils/socket';

import { Calculator, HistoryBoard } from '../index.js'
import { addToQueue } from '../../utils/history'


function SezzleCalc(props) {
    //To prevent rerenders in App
    const [clientHistory, setClientHistory] = useState(props.serverHistory);

    useEffect(() => {
        socket.on("FromAPI", async data => {
            if (data === "CLEAR") {
                setClientHistory([])
            } else {
                setClientHistory(addToQueue([...clientHistory], data));
            }
        })

        return () => {
            socket.off("FromAPI")
        }
    }, [clientHistory]);

    return (
        <div>
            <Calculator />
            <HistoryBoard expressionHistory={clientHistory} />
        </div>
    )
}

export default SezzleCalc