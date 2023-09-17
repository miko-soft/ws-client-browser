# @mikosoft/ws-client-browser
> Websocket Client for browser which works best with the Mikosoft Websocket Server - @mikosoft/ws-server.

Small but very powerful library made according to [RFC6455 Standard](https://www.iana.org/assignments/websocket/websocket.xml) for websocket version 13.



## Website Documentation
[http://libs.mikosoft.info/websocket/ws-client-browser](http://libs.mikosoft.info/websocket/ws-client-browser)



## Websocket Client for Browser Features
- websocket version: **13**
- subprotocol: **jsonRWS**, raw
- automatic reconnect
- chat in the rooms
- small file size, minified (*~7.5kB only*)
- powerful API
- possible RxJS integration
- use it with webpack builds


## Installation
```
npm install --save @mikosoft/ws-client-browser
```


## Howto Use
There are two ways to use it in your project:

- **script in HTML**
```html
<script src="/node_modules/@mikosoft/ws-client-browser/dist/wsClientBrowser.min.js"></script>
```
```javascript
// now fetch it as window.mikosoft global variable
const wsClient = new window.mikosoft.WsClientBrowser(wsOpts);
await wsClient.connect('ws://localhost:3211?authkey=TRTmrt'); // open websocket connection
```

- **import in JS**
```javascript
import { WsClientBrowser } from '@mikosoft/ws-client-browser';

const wsClient = new WsClientBrowser(wsOpts);
await wsClient.connect('ws://localhost:3211?authkey=TRTmrt'); // open websocket connection
```



## API
- **connect(wsURL)** - connect to the websocket server
- **disconnect()** - disconnect from the websocket server

- **sendOne(to:string, msg:any)** - send message to one websocket socket/client (parameter *to* is the socket ID)
- **send(to:string[], msg:any)** - send message to one or more clients
- **broadcast(msg:any)** - send message to all clients except the sender
- **sendAll(msg:any)** - send message to all clients and the sender

- **questionSocketId()** - receive the client's socket id
- **questionSocketList()** - receive the list of sockets connected on the server
- **questionRoomList()** - receive the list of all rooms
- **questionRoomListmy()** - receive the list of subscribed rooms

- **roomEnter(roomName:string)** - enter the room and start to listen the room's messages
- **roomExit(roomName:string)** - exit from the room and stop to listen the room's messages
- **roomExitAll()** - exit from the all rooms
- **roomSend(roomName:string, msg:any)** - exit from the room and stop to listen the room's messages

- **setNick(nickname:string)** - set the client's nickname
- **route(uri:string, body?:any)** - send route to the server, for example: *{uri: '/login', body: {username: 'john', password: 'trtmrt'}}*

- **on(eventName:string, listener:Function)** - listen events: *'connected', 'disconnected', 'message', 'message-error', 'route', 'question', 'server-error'*
- **once(eventName:string, listener:Function)** - listen events: *'connected', 'disconnected', 'message', 'message-error', 'route', 'question', 'server-error'* only once
- **off(eventName:string, listener:Function)** - stop listening the event for specific listener
- **offAll(eventName:string)** - stop listening all the events



## Example
```javascript
import { WsClientBrowser } from '@mikosoft/ws-client-browser';


class WsLib {

  constructor() {
    const wsOpts = {
        connectTimeout: 8000, // HTTP request timeout i.e. websocket connect timeout (when internet is down or on localhost $ sudo ip link set lo down)
        reconnectAttempts: 12, // try to reconnect n times
        reconnectDelay: 5000, // delay between reconnections
        questionTimeout: 13 * 1000, // wait for answer
        subprotocols: ['jsonRWS'],
        debug: false,
        debug_DataParser: false
      };
      // <script src="/node_modules/@mikosoft/ws-client-browser/dist/WsClientBrowser.min.js"></script>
      this.wsClient = new window.mikosoft.WsClientBrowser(wsOpts);
  }


  // open websocket connection
  async konekt() {
    // connection listener
    this.wsClient.on('connected', () => {
      console.log('Websocket is connected.');
    });

    // disconnection listener
    this.wsClient.on('disconnected', () => {
      console.log('Websocket is disconnected.');
    });

    // open websocket connection
    const wsURL = 'ws://localhost:3211?authkey=TRTmrt';
    await this.wsClient.connect(wsURL);

  }


  // close websocket connection
  async diskonekt() {
    if (!!this.wsClient) { this.wsClient.disconnect(); }
  }


}



export default new WsLib();

```


## Development and Build
If you want to participate in developing of the library:
```bash
$ npm run inst  # Install required dependencies and devDependencies
$ npm run dev   # This command will watch for /src/ file changes and build in /dist/ folder
```



### Licence
Copyright (c) 2021 [Mikosoft](http://www.mikosoft.info) licensed under [MIT](../LICENSE) .
