const requestHandler = (req,res) => {
    const url = req.url;
    const method = req.method;

    if (url === "/"){
        res.setHeader('content-type','text/html')
        res.statusCode = 200;
        res.write(
        `<html>
            <head>
                <title>Home Page</title>
            </head>
            <body>
                <h1>Hello There!!!</h1>
                <form action="/create-user" method="POST">
                    <input type="text" name="username"></input>
                    <button type="submit"> Create User</button>
                </form> 
            </body>
        </html>`);
        res.end();

    }
    if(url === "/users") {
        res.setHeader('content-type','text/html')
        res.statusCode = 200;
        res.write(
        `<html>
            <head>
                <title>Users Page</title>
            </head>
            <body>
                <h1>List Of Users</h1>
                <ul>
                    <li>john</li>
                    <li>mikael</li>
                    <li>kim</li>
                    <li>jim</li>
                    <li>zeya</li>
                </ul>
            </body>
        </html>`);
        res.end();
    }
    if(url === "/create-user"){
        let body = [];
        req.on("data", (chunk) => {
            body.push(chunk);
            console.log(chunk);
        });

        req.on("end",() => {
            const user = Buffer.concat(body).toString().split("=")[1];
            console.log(user)
    })
}};


module.exports = requestHandler;