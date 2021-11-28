const ConnectionFactory = require('../infra/database');

class AbstractDao {
    constructor() {

    }

    listSync(connection, sql) {
        return new Promise((resolve, reject) => {
            connection.query(sql, (err, result) => {
                return err ? reject(err) : resolve(result);
            });
        });
    }

    insertSync(connection, entity) {
        const { name, data } = entity;
        const sql = `insert into ${name} set ?`;

        return new Promise((resolve, reject) => {
            connection.query(sql, data, (err, result) => {
                return err ? reject(err) : resolve(result);
            });
        });
    }

    deleteSync(connection, entity) {
        const { name } = entity;
        const sql = `delete from ${name}`;

        return new Promise((resolve, reject) => {
            connection.query(sql, (err, result) => {
                return err ? reject(err) : resolve(result);
            })
        });
    }

    async list(sql) {
        const connection = ConnectionFactory.createConnection();

        try {
            const result = await this.listSync(connection, sql);

            return result;
        } catch (err) {
            console.log(`Error to execute query with sql ${sql}: ${err}`);
            
            return err;
        } finally {
            connection.end();
        }
    }

    async save(entity) {
        const connection = ConnectionFactory.createConnection();

        try {
            const result = await this.insertSync(connection, entity);

            return result;
        } catch (err) {
            console.log(`Error to save ${JSON.stringify(entity)}: ${err}`);

            return err;
        } finally {
            connection.end();
        }
    }

    async delete(entity) {
        const connection = ConnectionFactory.createConnection();

        try {
            const result = await this.deleteSync(connection, entity);

            return result;
        } catch (err) {
            console.log(`Error to delete ${JSON.stringify(entity)}: ${err}`);

            return err;
        } finally {
            connection.end();
        }
     }
}

module.exports = AbstractDao;