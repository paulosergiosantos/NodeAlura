const http = require('http');
const assert = require('assert');

const httpConfig = {
    hostname: 'localhost',
    port: 3000,
    path: '/produtos',
    method: 'get',
    headers: { 'Accept': 'application/json'  }
};

describe('#ProductController', () => {
    it('list json', done => {
        http.get(httpConfig, (res) => {
            assert.strictEqual(res.statusCode, 200);
            assert.strictEqual(res.headers['content-type'], 'application/json; charset=utf-8');
            done();
        });
    });
});
