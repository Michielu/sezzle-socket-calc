import React, { useState } from 'react';
import { Calculator, HistoryBoard } from '../index';


function SezzleCalc(props) {
    const [clientHistory, setClientHistory] = useState(props.serverHistory);

    return (
        <div>
            <Calculator />
            <HistoryBoard expressionHistory={clientHistory} />
        </div>
    )
}

export default SezzleCalc;