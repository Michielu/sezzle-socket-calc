import { useState, useCallback } from 'react';

function useExpression() {
    const [expression, setExpression] = useState("");
    const handleClick = useCallback((val) => {
        setExpression(val);
    }, []);
    return {
        handleClick,
        expression,
    };
}

export default useExpression;