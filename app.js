import express from "express"
import {Server} from "socket.io";
import http from "http"
import { callChat } from "./API/chatGpt.js";


const app = express();
const server = http.createServer(app)
const io = new Server(server);

//ver solo el folder public en el servidor
app.use(express.static('public'))

io.on('connection', (socket)=>{
    socket.on('cliente',msg => console.log(msg))
})


const PORT =3000
server.listen(PORT,()=>{
    console.log("Server on port",PORT)
})
callChat("capital de alemania?")
