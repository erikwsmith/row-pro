import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import AuthRoute from './Routes/AuthRoute.js';
import AdminRoute from './Routes/AdminRoute.js';
import Login from './Controllers/Login.js';

dotenv.config();

const app = express();
const { PORT, MONGO_URL } = process.env;

mongoose
    .connect(MONGO_URL)
    .then(() => console.log("MongoDB is connected!"))
    .catch((err) => console.log(err))

app.listen(PORT, () => {
    console.log(`Server is listening on "http://localhost:${PORT}"`);
});

// Middlewares
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use('/api', AuthRoute);
app.use('/admin', AuthRoute, AdminRoute);

// Login
app.post('/login', Login);

app.use((req, res, next)=>{
    return res.status(404).json({message: 'Page not found.'});    
})


