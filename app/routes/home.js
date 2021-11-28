const ProdutoDao = require('../dao/product-dao');

const initHome = app => {
    app.get('/', async (res, req) => {
        const result = await new ProdutoDao().listLivros();

        req.render('home/index', { livros: result });
    });
};

module.exports = app => initHome(app);