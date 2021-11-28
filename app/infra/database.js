const mysql = require('mysql');

const env = process.env.NODE_ENV || 'development';
const databaseName = env === 'development' ? 'curso_alura' : 'curso_alura_test';

class ConnectionFactory {
    static createConnection() {
        return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: databaseName
        });
    };
}

module.exports = ConnectionFactory;