const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url ==='/'){
    res.end("Hello World");
    }
    if(req.url === '/about'){
        res.end('Here is our Short Video demonstrating http module')
    }
    req.end("There is no such page")
})


server.listen(5000)