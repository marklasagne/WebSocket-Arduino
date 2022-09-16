## WebSocket Example using JavaScript and Arduino 

# To run the WebScoket server:
- inside the Server directory run `npm install`
- once dependencies are installed run `npm run`
- take note of the PORT that is open, I have 3001 hardcoded in this example

For more complicated servers look for chatroom examples (eg: https://karlhadwen.medium.com/node-js-websocket-tutorial-real-time-chat-room-using-multiple-clients-44a8e26a953e) 

# To run Arduino code:
- Change the library following (https://techtutorialsx.com/2017/11/03/esp32-arduino-websocket-server/)
- add your network name and pass to the code, you may want to use environment variables to hide any passwordsin production
- change the local IP, and port under "webSocket.begin" (line 26).  The port will be whatever your server is exposing, and the local IP is your devices IP that runs the server.  You can find this IP on windows by running ipconfig in windows command prompt




