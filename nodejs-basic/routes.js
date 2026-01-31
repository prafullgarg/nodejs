const fs = require('fs')

const requestHandler = (req,res) => {
    let count = 0;
    const url = req.url
    const method = req.method

    console.log(count)
    
    if(url == '/') {
        res.write('<html>');
        res.write('<head><title>route</title></head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">click</button></form></body>')
        res.write('</html>')
        count+=1
        console.log(count), "route /";
        return res.end();
        }
    
    if(url === "/message" && method === "POST"){

        const body = []
        req.on('data', (chunk) => {
            // console.log(chunk)
            body.push(chunk)
            count+=1
            console.log(count, "event data");
        });

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split("=")[1];
            fs.writeFileSync("message.txt", message)
            count+=1
            console.log(count, "event end");
        });

        res.statusCode = 302
        res.setHeader('Location', '/');
        count+=1
        console.log(count, "redirecting request");
        return res.end() 
        
    }

        res.setHeader('content-type','text/html')
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><h1>Hello from my nodejs server!</h1></body>')
        res.write('</html>')
        count+=1
        console.log(count, "hello nodejs");
        res.end();
        // as long as there is event handler without process.exit nodejs event loop will keep runing listening for requests.
        // process.exit();    
};

module.exports = requestHandler;