var http = require('http');

const httpConfig = {
    hostname: 'localhost',
    port: 3000,
    path: '/produtos',
    method: 'get',
    headers: {
        'Accept': 'application/json'
    }
};

http.get(httpConfig, function (res) {
    console.log(res.statusCode);
    res.on('data', function (body) {
        console.log(`${body}`);
    });
});
