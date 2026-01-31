// const http = require('/http')  use / before path for absolute paths
// const http = require('./http') use ./ before path to use your own files as relative path.

//  path without / means nodejs will search for module globally
const http = require('http');
const route = require('./route.js')

const server = http.createServer(route);


server.listen(3000)
console.log("Server listening at port 3000");