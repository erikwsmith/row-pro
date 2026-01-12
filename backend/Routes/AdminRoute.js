import CreateUser from '../Controllers/CreateUser.js';
import adminVerification from '../Middlewares/AdminMiddleware.js';
import User from '../Models/UserModel.js';

import express from 'express';
const router = express.Router();

router.use(adminVerification);

// Create new User record in MongoDB
router.post('/createuser', CreateUser);

// get all Users from MongoDB
router.get('/users', async (req, res) => {       
    const users = await User.find();
    res.json(users);
})

export default router;