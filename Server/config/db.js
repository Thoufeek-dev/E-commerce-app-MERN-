import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_DB_URL); 
        console.log(`MongoDB connected : ${connect.connection.host}`);
    } catch (error) {
        console.error(`Error : ${error.message}`);
        process.exit(1)
    }
}
