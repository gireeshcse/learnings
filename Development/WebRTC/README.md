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
    - TCP
        - Ensures that "data segments" are delivered correctly, and in order
    - IP
        - Responsible for transporting the 'data packets' to the correct IP address



