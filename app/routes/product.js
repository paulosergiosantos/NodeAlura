const ProductController = require('../controller/product-controller');

const initProduct = app => {
    new ProductController(app).initEndpoints();
}

module.exports = app => initProduct(app);