var http = require('http');

const httpConfig = {
    hostname: 'localhost',
    port: 3000,
    path: '/produtos',
    method: 'post',
    headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
    }
};

const clientRequest = http.request(httpConfig, function (res) {
    console.log(res.statusCode);
    res.on('data', function (body) {
        console.log(`${body}`);
    });
});

const livro = {
    titulo: 't',
    descricao: 'Cadastrado via JSON',
    preco: 50.5
};

clientRequest.end(JSON.stringify(livro))