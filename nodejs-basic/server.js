// const http = require('/http')  use / before path for absolute paths
// const http = require('./http') use ./ before path to use your own files as relative path.

//  path without / means nodejs will search for module globally
const http = require('http');
const fs = require('fs')
const path = require('path')

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
                localAddress: req.socket.localAddress,
                localPort: req.socket.localPort
            } 
        }
        const filePath = path.join('nodejs-basic', 'full-request.json') 
        fs.writeFileSync( filePath , JSON.stringify(fullRequest,null,2));
        // when hitting localhost:3000 from browser it is adding some additional headers in req starting with sec-* 

        res.writeHead(200,{'content-type': 'text/plain'})
        res.end('fullRequest saved/n')
    } )
});


server.listen(3000)