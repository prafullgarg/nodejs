// const http = require('/http')  use / before path for absolute paths
// const http = require('./http') use ./ before path to use your own files as relative path.

//  path without / means nodejs will search for module globally
const http = require('http');
const route = require('./routes.js')

const server = http.createServer(route);


server.listen(3000)