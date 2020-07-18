import React from 'react';
import { Button } from 'react-bootstrap';

// Extracting 'react-bootstrap' components from rest of application
function CalcButton(props) {
    return (
        <Button className="calc-butt" variant={props.varient} onClick={() => props.onClick(props.value)}> {props.value}</Button>
    )
}

export default CalcButton;