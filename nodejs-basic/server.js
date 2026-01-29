// const http = require('/http')  use / before path for absolute paths
// const http = require('./http') use ./ before path to use your own files as relative path.

//  path without / means nodejs will search for module globally
const http = require('http');
const fs = require('fs')

const server = http.createServer((req, res) => {

        const url = req.url
        const method = req.method

        if(url == '/') {
                res.write('<html>');
                res.write('<head><title>route</title></head>')
                res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">click</button></form></body>')
                res.write('</html>')
                return res.end();
        }

        if(url === "/message" && method === "POST"){
                fs.writeFileSync('message.txt',"message")
                res.statusCode = 302
                res.setHeader('Location', '/');
                return res.end() 
        }

        res.setHeader('content-type','text/html')
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><h1>Hello from my nodejs server!</h1></body>')
        res.write('</html>')
        res.end();
        // as long as there is event handler without process.exit nodejs event loop will keep runing listening for requests.
        // process.exit();

    
} );


server.listen(3000)