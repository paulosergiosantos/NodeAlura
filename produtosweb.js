const http = require('http')

const HTTP_PORT = 3000;

const requestHandle = (req, res) => {
    if (req.url === "/produtos") {
        res.end(`<html><head><title>Alura Course Node.js</title></head><body><div>Produtos</div></body></html>`)
    } else {
        res.end(`<html><head><title>Alura Course Node.js</title></head><body><div>Home</div></body></html>`)
    }
};

const server = http.createServer(requestHandle);

server.listen(HTTP_PORT, () => console.log(`Server listening on port ${HTTP_PORT}`));
 