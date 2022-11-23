const router = require('express').Router();
const {  getUsers } = require('../../controllers/userController');

// /api/students
router.route('/').get(getUsers);


module.exports = router;