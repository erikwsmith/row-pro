import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import User from './Models/UserModel.js';
import AuthRoute from './Routes/AuthRoute.js';

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
app.use("/", AuthRoute);

app.get('/', (req, res)=>{
    res.json({message: "Server is connected!"});
})

// get Users from MongoDB
app.get('/api/users', async (req, res) => {
    const data = await User.find();
    res.json({
        message: "You've landed on the Users page!",
        data: data
    });
})


