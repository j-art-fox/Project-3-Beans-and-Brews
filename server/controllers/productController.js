const { Product } = require('../models');

module.exports = {
    getProducts(req, res) {
        Product.find()
        .then((products) => res.json(products))
        .catch((err)=> res.status(500).json(err));
    }
}