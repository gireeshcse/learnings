const http = require("http");

const WebSocketServer = require("websocket").server

const httpServer = http.createServer((req,res)=>{

    res.writeHead(200,{
        "access-control-allow-origin":"*",
        "access-control-allow-headers":"*"
    })

    res.end("This is a http server running on a nodejs server")
})


httpServer.listen(8080,()=>{
    console.log("http server is listening on port 8080")
})

let websocket = new WebSocketServer({
    httpServer: httpServer,
    autoAcceptConnections: false
})

function isOriginAllowed(origin){
    return true;
}

websocket.on('request',(req)=>{
    if(!isOriginAllowed(req.origin)){
        req.reject(403,"not allowed to connect")
        console.log("client request rejected: "+ req.origin)
    }
    let connection = req.accept();
    connection.send("Connection established");

    connection.on("message",(message)=>{
        connection.send('Ping. Message received from the client: '+message.utf8Data)
    })

    connection.on("close",(reasonCode,description)=>{
        console.log("connection "+connection.remoteAddress + " is disconnected.")
    })
})