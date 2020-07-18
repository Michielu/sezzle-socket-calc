import React from 'react';
import { CalcButton } from '../../partials';
import useExpression from './hooks/useExpression'
import GenerateHandlers from './handlers';

function Calculator() {
    const useExpressions = useExpression();
    const { handleNum, handleOp, handleClear, handleSolve, handleDecimal } = GenerateHandlers(useExpressions)

    return (
        <div >
            <div>{useExpressions.expression}</div>
            <div className="mainCalc">
                <div className="button-row">
                    <CalcButton varient="outline-primary" onClick={handleOp} value={'/'} />
                    <CalcButton varient="outline-primary" onClick={handleOp} value={'*'} />
                    <CalcButton varient="outline-primary" onClick={handleOp} value={'-'} />
                    <CalcButton varient="outline-primary" onClick={handleOp} value={'+'} />
                </div>
                <div className="button-row">
                    <CalcButton varient="outline-dark" onClick={handleNum} value={'7'} />
                    <CalcButton varient="outline-dark" onClick={handleNum} value={'8'} />
                    <CalcButton varient="outline-dark" onClick={handleNum} value={'9'} />
                </div>
                <div className="button-row">
                    <CalcButton varient="outline-dark" onClick={handleNum} value={'4'} />
                    <CalcButton varient="outline-dark" onClick={handleNum} value={'5'} />
                    <CalcButton varient="outline-dark" onClick={handleNum} value={'6'} />
                </div>
                <div className="button-row">
                    <CalcButton varient="outline-dark" onClick={handleNum} value={'1'} />
                    <CalcButton varient="outline-dark" onClick={handleNum} value={'2'} />
                    <CalcButton varient="outline-dark" onClick={handleNum} value={'3'} />
                </div>
                <div className="button-row">
                    <CalcButton varient="outline-dark" onClick={handleNum} value={'0'} />
                    <CalcButton varient="outline-dark" onClick={handleDecimal} value={'.'} />
                    <CalcButton varient="outline-primary" onClick={handleClear} value={'AC'} />
                    <CalcButton varient="outline-success" onClick={handleSolve} value={'='} />
                </div>
            </div>
        </div>
    );
}

export default Calculator