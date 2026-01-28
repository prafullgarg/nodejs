// const http = require('/http')  use / before path for absolute paths
// const http = require('./http') use ./ before path to use your own files as relative path.

//  path without / means nodejs will search for module globally
const http = require('http');
const fs = require('fs')

const server = http.createServer((req, res) => {
    let body =[];

    req.on('data', chunk => {body.push( chunk )} )

    req.on('end', ()=>{
        body = Buffer.concat(body).toString();

        const fullRequest = {
            method: req.method,
            url: req.url,
            httpVersion: req.httpVersion,
            headers: req.headers,
            body: req.body,
            socket: {
                remoteAddres: req.socket.remoteAddress,
                remotePort: req.socket.remotePort,
            } 
        }
    } )
});


server.listen(3000)