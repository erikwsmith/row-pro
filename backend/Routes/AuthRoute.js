import userVerification from '../Middlewares/AuthMiddleware.js';
import express from 'express';
const router = express.Router();

router.use(userVerification);

export default router;