const router = require('express').Router();
const { getProducts } = require('../../controllers/productController');


router.route('/').get(getProducts);


module.exports = router;