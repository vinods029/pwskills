const express = require('express')
const {home,register,login} = require('../controllers/userController')


const router = express.Router();

router.get('/',home)
router.post('/register',register) // to register
router.post('/login',login) // to login


module.exports = {router}
