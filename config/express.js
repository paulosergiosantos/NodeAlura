const express = require('express');
const bodyParser = require('body-parser');
const load = require('express-load');

const initApp = () => {
    const app = express();

    app.use(express.static('./app/public'));
    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    load('routes', { cwd: 'app' }).into(app);

    return app;
};

module.exports = initApp();