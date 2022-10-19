## WebSocket Example using JavaScript and Arduino 

### To run the WebSocket server:
- inside the Server directory run `npm install`
- once dependencies are installed run `npm start`
- take note of the PORT that is open, I have 3001 hardcoded in this example

### To run Arduino code:
- install libraries (https://github.com/Links2004/arduinoWebSockets)
- add your network name and password to the code, you may want to use environment variables to hide any passwords in production
- change the local IP, and port under "webSocket.begin" (line 26)
- the port will be whatever your server is exposing, and the local IP is your devices IP that runs the server
- you can find this IP on WSindows by running `ipconfig` in windows command prompt or powershell 




