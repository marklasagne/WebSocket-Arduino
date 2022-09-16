// import requirements
const express = require('express');
const app = express();
const http = require('http');
const WebSocket = require('ws');
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
    console.log('new client connected'); // log when a client is connected
    ws.on('message', (message) => {
        console.log('recieved: ' + message.toString()); // log the message received 

        // received message is sent to every connected client
        wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(message.toString());
        }
        });
    });
});

app.get('/', (req, res) => {
  res.send('Running WebSockets');
});

server.listen(3001, () => {
  console.log('Listening to port 3001');
});