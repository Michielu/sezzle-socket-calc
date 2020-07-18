import React from 'react';
import { Jumbotron } from 'react-bootstrap';

function CalcJumbo(props) {
    return (
        <Jumbotron bsPrefix="calc-jumbo">
            <h3>{props.value}</h3>
        </Jumbotron>
    )
}

export default CalcJumbo;