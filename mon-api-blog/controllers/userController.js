const User = require('../models/user');
const asyncHandler = require('express-async-handler');

const addUser = asyncHandler (async (req, res) => {
    if (!req.body){
        res.status(400)
        throw new Error('Content can not be empty!')
    }
        //return res.status(400).send({ message: 'Content can not be empty!' });
    const {username, email, password, role} = req.body;
    if (!username || !email || !password) {
        return res.status(400).send({ message: 'Username, email and password are required!' });
    }
    const useradded = new User({
        username: username,
        email: email,
        password: password,
        role: role,
    });
    //try {
       const addResult = await useradded.save();
       res.status(201).send(addResult);
    //} catch (error) {
       /* if (error.code === 11000) {
            return res.status(409).send({ message: 'Username or Email already exists!' });
        }
        else{
            res.status(500).send({ message: error.message });
        }
        
    }*/
});

const getUsers = async (req, res) => {
    const users = await User.find();
    if(!users){
        return res.status(200).json({message: 'No users found'});
    }
    res.status(200).json({message:"liste des users", users,nb_users: users.length,users:users});
};

const getUserinfo = async (req, res) => {
    const id = req.params.id;
    if (!id) {
        return res.status(400).json({ message: 'User id is required' });
    }
    try {
        const userinfo = await User.findById(id);
        if (!userinfo || userinfo.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }
        return res.status(200).json({ message: 'User found', user: userinfo });
    } catch (error) {
        return res.status(404).json({ message: 'User not found' });
    }
};

const getUserinfoByemail = async (req, res) => {
    if (!req.body) {
        return res.status(400).json({ message: 'Request body is required' });
    }
    const email = req.body.email;
    if (!email) {
        return res.status(400).json({ message: 'Email is required' });
    }
    try {
        const user = await User.find({ "email": email });
        if (!user || user.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }
        return res.status(200).json({ message: 'User found', user: user });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const updateUser = async(req,res)=>{
    const id = req.params.id
    if(!id)
        return res.status(404).json({message:"ID is required"})
    if(!req.body)
        return res.status(404).json({message:"Info that you gonna update are required"})
    const {username, email , role} = req.body
    try{
    const userUpdated = await User.findByIdAndUpdate(id,{
        username:username,
        email:email,
        role:role
    },{new:true})
    return res.status(200).json({message:"User updated successfully", user:userUpdated})
    }catch(error){
        return res.status(500).json({message:"update failed"})
    }
}

const deleteUser = async(req,res)=>{
    const id = req.params.id
    if(!id)
        return res.status(404).json({message:"ID is required"})
    try{
    const userDeleted = await User.findByIdAndDelete(id);
    if(!userDeleted)
        return res.status(404).json({message:"User not found"})
    return res.status(200).json({message:"User deleted successfully"})
    }catch(error){
        return res.status(500).json({message:"delete failed"})
    }
}

module.exports = {addUser, getUsers,getUserinfo,getUserinfoByemail, updateUser, deleteUser};

