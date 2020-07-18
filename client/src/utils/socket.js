import socketIOClient from "socket.io-client";

const ENDPOINT = process.env.NODE_ENV === 'production' ? document.location.protocol + '//' + document.location.host : "http://127.0.0.1:4000";
const socket = socketIOClient(ENDPOINT);

export default socket;