const express = require('express');
const userRoutes = express.Router();
const{getAllUsers,createUser} = require('../controllers/userController');

userRoutes.get('/', getAllUsers);
userRoutes.post('/add', createUser);

module.exports = userRoutes;