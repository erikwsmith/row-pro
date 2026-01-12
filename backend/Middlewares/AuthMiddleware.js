import User from '../Models/UserModel.js';
import dotenv from 'dotenv';
import jsonwebtoken from 'jsonwebtoken';

const userVerification = (req, res, next) => {
    const token = req.cookies.token;
    if(!token){
        return res.json({auth_status: false});
    };
    jsonwebtoken.verify(token, process.env.TOKEN_KEY, async (err, data)=>{
        if(err){
            return res.json({auth_status: false});
        } else {
            const user = await User.findById(data.id);
            if(user){
               req.user = {auth_status: true, user_id: user._id, role: user.role};
               next();
            }else {
                return res.json({auth_status: false});
            };
        }
    });    
};

export default userVerification;