import { sendExpression } from '../../utils/history'

const operations = {
    '+': (a, b) => a / 1.0 + b / 1.0,
    '*': (a, b) => a * b,
    '-': (a, b) => a - b,
    '/': (a, b) => {
        if (b === 0) return "NA"
        else {
            return Math.round(a / b * 100) / 100
        }
    }
}

function solveCalc(valueString) {
    const OPERATORS = /[-+//*]/g;
    const ALL_DIGITS = /[0-9.]+/g;

    const values = Array.from(valueString.matchAll(ALL_DIGITS), m => m[0]);
    const ops = Array.from(valueString.matchAll(OPERATORS), m => m[0]);

    const result = values.reduce((acc, next, i) => operations[ops[i - 1]](acc, next));
    console.log("CalcLogic: ", valueString + "=" + result)
    return valueString + "=" + result;
}

const GenerateHandlers = (expressionHook) => {
    const { handleClick, expression } = expressionHook;
    const OPERATORS_END = /[-+//*]$/;
    const LAST_NUMBER = /[0-9.]+$/;

    const handleNum = (val) => {
        handleClick(expression + val);
    }
    const handleOp = (val) => {
        if (expression && !OPERATORS_END.test(expression)) {
            handleClick(expression + val);
        }
    }
    const handleClear = () => {
        handleClick("");
    }
    const handleSolve = () => {
        const fullExp = solveCalc(expression);
        sendExpression(fullExp);
        handleClick("");
    }
    const handleDecimal = (val) => {
        const m = expression.match(LAST_NUMBER)
        if (m && m[0].indexOf(".") === -1) {
            handleClick(expression + val);
        } else {
            console.log("Only one decimal point per number permitted");
        }
    }

    return {
        handleNum, handleOp, handleClear, handleSolve, handleDecimal
    }
}

export default GenerateHandlers;