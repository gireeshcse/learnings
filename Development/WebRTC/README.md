# WebRTC

* HTTP
    - Client Server Model
    - HyperText Transfer Protocol
    - Request/Response model
    - Web Servers
        - Apache
        - Tomcat
        - Nginx
        - Node.js
        - Monkey
        - Lighttpd
        - Caddy etc
    - Stateless
        - We can still keep track by sessions using Cookies or session tokens
        - Each http connection is independent, with no memory of previous requests.
        - HTTP/1.0 Connection is closed. New connection for every http request/response.
        - HTTP/1.1 and HTTP/2, TCP connection is still kept alive i.e persistent
    - Client is the only one that can initiate an HTTP request.
    - All HTTP communication is done using TCP
    - AJAX - Short Polling
    - Comet - Long Polling
    - Server Sent Events - HTTP streaming
    - Not designed for BI-directional communication
    - Higher Server Load - Resultant of Polling
    - Increased latency
        - Handshakes
        - Header overhead

* WEBSOCKETS

    - Allows true bi-directional communication
    - Process
        - Client sends HTTP request to establish the websocket
        - Server respondes
        - WebSocket protocol is used for http/1.1
    - Connection stays open
        - Sends ping pong requests/responses to keep the connection alive.
    - A WebSocket server can send the client data, without the client requesting it. And client can also send the data to the server.
    - Instant updates, online gaming and collaborative tools.

- Protocols
    - Rules that computers need to follow to allow the exchange of data.
    - Define the order and format of bits that are sent over the internet.
    - Example:
        - Sender structures the data in accordance with the protocol
        - The bits are sent over the wire
        - The receiver interprets the bits using the same protocol.
    - HTTP PROTOCOL
        - Request Methods
            - GET,POST,PUT, Delete
        - Structure
            - HTTP version, url, body, headers
        - Status Codes
            - 200,404,401
    ```
    curl --head https://www.google.com
    curl -v https://www.google.com
    ```
    - HTTP
        - Used by browsers to request certain data files from the web server
        - HTTP headers are extra pieces of information or metadata sent with a request or response
        - HTTP header names are case insensitive.
    - TCP
        - Ensures that "data segments" are delivered correctly, and in order
        - Responsible for breaking up a message into datagrams called segments, reassembling them at the other end, resending anything that gets lost, and putting things back in the right order. 
        - Header
            - Source Port
            - Destination Port
            - Sequence No.
            - ACK No.
            - Flags
            - Options
    - IP
        - Responsible for transporting the 'data packets' to the correct IP address
        - Routing data packets to other end
        - Header
            - IP Version (IPV4/IPV6)
            - TTL
            - Source Address
            - Destination Address
    
    - Datagram
        - Information transfered over the wire is done as a sequence of "datagrams"
        - A packet is a physical thing, appearing on an ethernet or some wire
        - Datagrams get sent over the internet as IP packets, and sometimes multiple packets can represent one datagram.


- Maximum Transmission Unit
    - 1460 bytes (1500)
    - MTU specipies how much data can be transported over the wire in one chunk without having to do fragmentation.
    - Measured in bytes and includes both the payload and headers
    - Options flag

- Maximum Segment Size
    - Defines the largest amount of data(excluding headers) that a device can accept in a single segment.
    - Smaller than MTU because MTU accounts for TCP/IP headers. 
    - if MTU is 1500 bytes, MSS would be 1460 bytes (20 Bytes IP header and 20 Bytes TCP Header)

- TCP Handshake
    - Client -> TCP SYN -> Server
    - Client <- SYN/ACK <- Server
    - Client -> ACK     -> Server

    - The client chooses an initial sequence number, set in the first SYN packet
    - The server also chooses its own initial sequence number, set in the SYN/ACK packet
    - Both the client and server acknowledges by incrementing sequence no by one and sending it ACK no.

- TCP/IP model
    - Application layer 
        - http GET
        - This is the layer that the user sees and interacts with
        - It tell the next layer what type of data we are dealing with
    - Transport layer
        - TCP/UDP
        - This layer packages data  in its specific format
        - Auto assigns a port number to the process running on the host
        - Adds TCP/UDP header
        - Window header
            - The amount of data that can be sent by the sender, without having to stop and wait.
            - TCP uses a flow control(sliding window) protocol to avoid having sender send too much data too quickly for the TCP receiver to receive and process it relibly.
            - The window size (that the receive sets) is a hard limit on how many bytes the sender can send without being forced to stop to wait for an acknowledgement(ACK)
            - It's called 'sliding' because devices can change the window size dynamically, making it smaller when there's congestion and bigger when things are clear.
            - TCP window size is controlled by the end devices.
            - if network is unrealiable, window size should be small
            - Because TCP is bi-directional, both client and server specify a window property.
            - TCP header allow the windows size to be set to 16 bits long. This means that the maximum window size that can be advertised without using the window scale option is 65,535 bytes (With window scale option, it can increase to 1 GB)
        - This layer takes the application data (websocket send() request) and packages it into segments, which are then sent over the internet using port numbers.
    - Internet layer
        - IP
        - Reponsible for identifying which computer to send data to
        - It takes the data from the transport layer and packages it into packets, which are then sent over the internet using IP addresses
        - On a TCP/IP network every device must have an IP address.
    - Network layer
        - Ethernet/Wifi
        - Organizes the data into raw bits, and then moves data over the internet
        - This layer generates bit frames and also identifies the device by its MAC address.
        - ARP
        - Source MAC
        - Destination MAC
        - The MAC address is relevant only within a single network segment. When data is forwarded to another network, the router replaces the MAC address in the frame with the MAC address of the next-hop device.

- Port numbers
    - (0-65535) - Upto 1024 are generally reserved for known services.
    - Most servers use non-ephemeral port numbers (80,8080,443)
    - These are for communication - not security
    - Opening custom port 

        ```
        curl --local-port 12345 localhost:3000
        ```


### Sockets

- Everthing that happens on our computer is a process
- Every process needs a unique socket where data can travel in and out of.
- Every WebSocket connection first opens up a TCP connection
- Every TCP connection is defined by two endpoints
- Each endpoint is referred to as a socket.
- Sockets allow processes to send and receive data over a network.
- IP address + Port Number = Socket Address.
- Sockets are not the same as WebSockets
- WebSockets are a way to send/receive data between two socket endpoints.

### WebSocket

* A Client has to start the WebSocket handshake process
* WebSockets are designed to work over HTTP ports - HTTP compartible
* Client sends an HTTP GET request to the server, asking to switch over to the ws:// protocol
* HTTP version needs to be HTTP/1.1 or greater and it also has to be a GET request
* Once the connection is upgraded, the protocol switches from HTTP to WebSockets, and while packets are still sent over TCP, the communication now conforms to the WebSocket message format.
* The client sends the get request to ws:// or wss:// URI and it uses HTTP "Upgrade" header.
* The server needs to respond to the handshake request. The sernver needs to respond with 101 status code to switch.
* From this point on, The connection is binary and does not conform to HTTP protocol.
* If we're opening a new connection using WebSocket API, all of the handshake work and setting headers is done for you.

```
let socket = new WebSocket('https://echo.websocket.org/.ws')
socket.onmessage = (message) => { console.log("Message from server \n"+message.data+"\n");};
socket.send('Hello from client');
```
* A proxy is a just a middleman - it's another computer that sits in between the users device and the ultimate server

* A reverse proxy may forward a request or not(for example in case of a cache) and it may modify it (for example changing its headers)

* WebSocket is an Event-Driven API
* Headers
    - Connection
    - Upgrade
        - Only applicable for HTTP/1.1
    - How proxies handle headers, there are two types
        - End-to-End HTTP Headers
            - These headers must be untouched they must be transferred to the ultimate recipient(The server for a requet or the client for a response)
        - HOP-by-HOP HTTP Headers
            - Meaningful only when a proxy is involved
            - When encountering these headers in a request, a compliant proxy should proces or action whatever it is these headers are indicating, and not forward them on to the next hop.
            - Connection
                - This allows the client to specify options that are desired for a particular connection.
            - Keep-Alive
            - Upgrade.
    - If there is a proxy server in between client(A) and the server (C), the Upgrade header is not allowed to be passed on to the server due to its hop-by-hop nature.

    - The proxy server (B) needs to be configured explicitly to open its own WS connection with the server.

    - This means proxy server needs to understand websockets - not all proxy servers will work.

    - Traditionally, this would mean that client(A) - Client(B) will be over one TCP connection, and the proxy(B) to server(C) will be over another TCP connection.

* Nodejs CORS http header

```
const httpServer = http.createServer((req,res) => {
    res.writeHead(200,{
        "access-control-allow-headers": "*",
        "access-control-allow-origin": "*"
    });

    res.end("hello");
})
```


* Why BASE64

    - All headers must contain only ASCII characters
    - A way of transforming one binary sequence of data into a bunch of gibberish numbers and letters consisting of only ASCII characters.

    - encodeURIComponent("&@") # client 

    - The purpose of base64 is to allow non-ASCII characters to be "disguised" as ASCII characters in order to compile with rules.

    - Works with UTF-8 or ASCII code.We can't envode UTF-16 into base64 directly. For this always work with the utf-8 hex values.

* **Sec-WebSocket-**

    - These headers are used during initial handshake process
    - Not allowed to set these headers with fetch or xhr
    - When we use WebSocket API, various headers will be added to our WebSocket upgrade request, AUTOMATICALLY

* Sec-WebSocket-Accept
    
    - Sec-WebSocket-Key is a random 16-byte string, once we have 16 random characters, it is then base64 encoded and client finally sends this key to the WebSocket server

    - The Server will then take the key, and adds a GUID number to the key and hashes(SHA-1) it, and sends it back as base64 as Sec-WebSocket-Accept 

    - When this header is received by the client, the client checks whether it is the correct value based on the key it gave the server previously.If the values match, the client knows that a real websocket server has accepted the connection

* Sec-WebSockets-Protocol

    - SOAP
        
        - Used when dealing with XML data

    - STOMP

        - Streaming Text Orientated Messaging Protocol and text based messaging protocol.

        - Gives access to login & passcode parameters, and command like SUBSCRIBE to facilitate communication between clients and servers through WS frames

    - XMPP

        - Used for instant messaging, multi-party chat, voice and video calls

    - MQTT

        - designed for small devices with low bandwidth


    ```
    let socket = new WebSocket('ws:/example.com',['stomp','xmpp'])
    ```

    ```
    let socket = new WebSocket("ws:/localhost:8080","my-custom-json-protocol")

    let msg = {
        type: "chat",
        data: {
            name: "ram"
        }
    }

    socket.onopen = function(){
        socket.send(JSON.stringify(msg))
    }

    socket.addEventListener("message",function(event){
        let rcvMsg = JSON.parse(event.data);
        console.log(rcvMsg.data.message);
    })
    ```

* Sec-WebSocket-Version

    - sent by client automatically telling the server what version it wishes to use
    - If server does not support, it returns error (426)
     
* Sec-WebSocket-Extensions

    - Sent by the client, telling the server the extensions it supports
    - extension is something related to transfering data
    - Typically used to negotiate data compression
    - Sec-WebSocket-Extensions: permessage-deflate;client_max_window_bits


- Opening a WebSocket Connection

    - creating WebSocket object

        - Native object

        ```
        const ws = new WebSocket(url,[protocols])

        ```

        - Libraries (socket.io)

    - Interfaces

        - A collection of methods and properties that we have access to

        - WebSocket
            - Object given by websocket constructor
            - Primary interface for interacting with a WebSocket server
            - Events
                - open
                - close
                - message
                - error

        - CloseEvent

        - MessageEvent
