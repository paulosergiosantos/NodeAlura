const AbstractDao = require('./abstract-dao');

class ProdutoDao extends AbstractDao {
    constructor() {
        super();
    }

    async listLivros() {
        const livros = await this.list('select * from livros');
        
        return livros;
    }

    async saveLivro(livro) {
        const entity = { name: 'livros', data: livro };
        const result = await this.save(entity);

        return result;
    }

    async deleteAllLivros() {
        const entity = { name: 'livros' };
        const result = await this.delete(entity);
        
        return result;
    }

    async getById(id) {
        const sql = `select * from livros where id = ${id}`;
        const livros = await this.list(sql);

        return livros[0];
    }
}

module.exports = ProdutoDao;
