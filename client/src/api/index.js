import axiosRequest from "../utils/axiosRequest.js";

const getHistory = async () => {
    const URL = "/h/previous";
    try {
        const expHistory = await axiosRequest.get(URL);
        console.log(expHistory.data)
        return expHistory.data;
    } catch{
        console.log("Error") //TODO
    }
}

const postExpression = async (newExp) => {
    const URL = 'h/add';
    const data = { "calcExpression": newExp }
    try {
        const response = await axiosRequest.post(URL, data);
        console.log("response", response)
        return response;
    } catch{
        console.log("Error") //TODO
    }
}

const getClearHistory = async () => {
    const URL = "/h/clear";
    try {
        const expHistory = await axiosRequest.get(URL);
        return expHistory.data;
    } catch{
        console.log("Error") //TODO
    }
}

export {
    getHistory, getClearHistory, postExpression
}