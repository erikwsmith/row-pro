import userVerification from '../Middlewares/AuthMiddleware.js';
import CreateUser from '../Controllers/CreateUser.js';
import express from 'express';

const router = express.Router();

router.post('/api/createuser', CreateUser);
router.get('/api/admin', userVerification);

export default router;