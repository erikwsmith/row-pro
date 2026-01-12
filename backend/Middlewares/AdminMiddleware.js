import User from '../Models/UserModel.js';
import dotenv from 'dotenv';
import jsonwebtoken from 'jsonwebtoken';

const adminVerification = async (req, res, next) => {
    const role = await req.user.role;
    if(role !== 'admin'){
        return res.json({message: 'You must be an administrator to perform this task.'})    
    };    
    next();
};

export default adminVerification;