import User from '../Models/UserModel.js';
import bcrypt from 'bcrypt';
import createSecretToken from '../util/SecretToken.js';

const CreateUser = async (req, res, next) => {
    try {
        const { email, password, username } = req.body;
        if(!email || !password || !username){
            return res.json({message: 'All fields are required'});
        };
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.json({message: "User already exists"});
        };
        const user = await User.create({ email, password, username });
        
        /*
        // Create token and cookie after User record is added to MongoDB
        const token = createSecretToken(user._id);
        res.cookie("token", token, {
            withCredentials: true,
            httpOnly: false
        });
        */

        res.status(201).json({message: "User created successfully!", success:true, user });
        next();
    } catch (error) {
        console.error(error);
    }
};

export default CreateUser;