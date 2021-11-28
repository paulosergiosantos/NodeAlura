const ProdutoDao = require('../dao/product-dao');

const initPromotions = app => {
    app.get('/promocoes/form', async (req, res) => {
        const result = await new ProdutoDao().listLivros();

        res.render('promotion/form', { lista: result });
    })

    app.post('/promocoes', async (req, res) => {
        const promotion = req.body;
        const { mensagem, livro: { id } } = promotion;

        console.log(mensagem, id)

        const livro = await new ProdutoDao().getById(id);
        
        console.log(livro)

        app.get('io').emit('novaPromocao', `Promocao ${mensagem}: ${livro.titulo} por apenas ${livro.preco}`);

        res.redirect('/promocoes/form');
    })
}

module.exports = app => initPromotions(app);