import { getHistory, postExpression } from '../api/index'


const MAX_QUEUE_SIZE = 10;

const addToQueue = (oldQueue, newExp) => {
    while (oldQueue.length >= MAX_QUEUE_SIZE) {
        oldQueue.pop();
    }
    oldQueue.unshift(newExp);
    return Object.freeze(oldQueue);
}

const getServerHistory = async () => {
    //TODO error handling
    console.log("Getting history")
    return getHistory()
}

const sendExpression = (exp) => {
    return postExpression(exp)
}


export {
    addToQueue, sendExpression, getServerHistory
}