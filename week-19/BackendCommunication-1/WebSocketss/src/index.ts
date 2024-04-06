import express from "express";
import { WebSocket, WebSocketServer } from "ws";

const app = express();
const httpServer = app.listen(8080);

const wss = new WebSocketServer( {server: httpServer} );

wss.on("connection", function connection(ws) {
    wss.on('error', console.error);

    wss.on("message", function msg(data, isBinary){
        wss.clients.forEach(function each(client){
            if(client.readyState === WebSocket.OPEN){
                client.send(data, { binary: isBinary })
            }
        })
    })

    ws.send("Hello! Message from Server!!!");
})