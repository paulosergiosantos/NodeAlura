const { check, validationResult } = require('express-validator');
const ProdutoDao = require('../dao/product-dao');

class ProductContoller {
    constructor(app) {
        this.app = app;
        this.dao = new ProdutoDao();
    }

    getProdutos(req, res) {
        
        res.end(`
        <html>
            <head>
                <title>Alura Course Node.js</title>
            </head>
            <body>
                <div><a href="http://localhost:3000/produtos">Listar Produtos</a></div>
                <div><a href="http://localhost:3000/produtos/form">Cadastrar Produtos</a></div>
            </body>
        </html>`)
    }

    getDao() {
        return this.dao;
    }

    initListProdutos() {
        this.app.get('/produtos', async (req, res, next) => {
            const result = await this.dao.listLivros();

            if (result instanceof Error) {
                return next(result);
            }

            res.format({
                html: () => res.render('product/list', { livros: result }),
                json: () => res.json(result)
            });
            
        });
    }

    initSaveProdutos() {
        this.app.post('/produtos', [
            check('titulo', 'Título obrigatório').not().isEmpty(),
            check('preco', 'Preço obrigatório e numérico').isFloat()
        ],
        async (req, res, next) => {
            const livro = req.body;

              const result = validationResult(req);

            if (result.errors.length > 0) {
                res.format({
                    html: () => res.status(400).render('product/form', { errosValidacao: result.errors, livro }),
                    json: () => res.status(400).json(result.errors)
                });
            } else {
                const result = await this.dao.saveLivro(livro);

                if (result instanceof Error) {
                    return next(result);
                }

                res.format({
                    html: () => res.redirect('/produtos'),
                    json: () => res.status(201).json({ id: result.insertId })
                });
            }
        });
    }

    initForm() {
        this.app.get('/produtos/form', async (req, res) => {
              res.render('product/form', { errosValidacao: {}, livro: {}});
        });
    }

    initEndpoints() {
        this.initListProdutos();
        this.initSaveProdutos();
        this.initForm();
    }
}

module.exports = ProductContoller;