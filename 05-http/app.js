const http = require('http')

http.createServer((req, res) => {
    res.end("Hello World! Wellcome to my site!")
}).listen(8081)

console.log("O servidor  rodando...");