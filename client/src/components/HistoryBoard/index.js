import React from 'react';

function HistoryBoard({ expressionHistory }) {
    return (
        <div>
            <h4>Calculation History</h4>
            {expressionHistory.map((expression, i) => {
                return <div key={"exp" + i}>{expression}</div>
            })}
        </div>
    )
}

export default HistoryBoard;