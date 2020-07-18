let queue = [];
const MAX_QUEUE_SIZE = 10;

const addToQueue = (newExp) => {
    while (queue.length >= MAX_QUEUE_SIZE) {
        queue.pop();
    }
    queue.unshift(newExp);
}

const getQueue = () => queue

const clearQueue = () => {
    queue = []
}

module.exports = {
    addToQueue, getQueue, clearQueue
}