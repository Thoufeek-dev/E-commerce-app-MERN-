import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import router from './routes/router.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT | 3000;

app.use(express.json());

app.use("/api/products", router)

app.listen(PORT, () => {
    connectDB();
    console.log("Server started at port " + PORT);
})