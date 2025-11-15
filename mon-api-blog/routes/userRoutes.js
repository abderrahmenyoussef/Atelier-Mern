const express = require('express');
const userRoutes = express.Router();
const{addUser,getUsers,getUserinfo,getUserinfoByemail,updateUser,deleteUser} = require('../controllers/userController');

userRoutes.post('/add', addUser);
userRoutes.get('/all', getUsers);
userRoutes.get('/byemail', getUserinfoByemail);
userRoutes.put('/update/:id', updateUser);
userRoutes.delete('/delete/:id', deleteUser);
userRoutes.get('/:id', getUserinfo);


module.exports = userRoutes;