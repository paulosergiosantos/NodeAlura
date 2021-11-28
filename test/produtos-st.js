const express = require('../config/express');
const request = require('supertest')(express);
const ProdutoDao = require('../app/dao/product-dao');

const produtoDao = new ProdutoDao();

describe('#ProductControllerST', () => {

    beforeEach(done => {
        produtoDao.deleteAllLivros().then( () => done());
    });

    it('list json', done => {
        request.get('/produtos')
            .set('Accept', 'application/json')
            //.expect('Content-type', 'application/json; charset=utf-8')
            .expect(200, done);
    });

    it('insert valid product json', done => {
        request.post('/produtos')
            .set('Accept', 'application/json')
            .send({ titulo: 'Title', descricao: 'Description', preco: 10.5 })
            .expect(201, done);
    });

    it('insert invalid price', done => {
        request.post('/produtos')
            .send({ titulo: 'Title', descricao: 'Description', preco: 'a' })
            .expect(400, done);
    });

    it('insert valid product', done => {
        request.post('/produtos')
            .send({ titulo: 'Title', descricao: 'Description', preco: 10.5 })
            .expect(302, done);
    });
});
