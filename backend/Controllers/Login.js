import User from '../Models/UserModel.js';
import bcrypt from 'bcrypt';
import createSecretToken from '../util/SecretToken.js';

const Login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if(!email || !password){
            return res.json({message: 'All fields are required'});
        };
        const user = await User.findOne({email});
        if(!user){
            return res.json({message: 'User not found.'});
        };
        const auth = await bcrypt.compare(password, user.password);
        if(!auth){
            return res.json({message: 'Incorrect password. Please try again.'});
        };
        const token = createSecretToken(user._id);
        res.cookie("token", token, {
            withCredentials: true,
            httpOnly: false
        });
        return res.status(201).json({message: 'User logged in successfully!', success:true, user});
        next();
    } catch (error) {
        console.error(error);
    };
};

export default Login;