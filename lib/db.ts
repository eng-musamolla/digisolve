import mongoose from "mongoose";

const uri = process.env.MONGODB_URI;

const connectDB = async () => {
    
    if (!uri) {
        throw new Error(
        "Please define the MONGODB_URI environment variable inside .env.local"
        );
    }
    
        
    const connectionState = mongoose.connection.readyState;
    if (connectionState === 1) {
        console.log("Already connected to MongoDB");
        return;
    }
    if (connectionState === 2) {
        console.log("Connecting to MongoDB");
        return;
    }


    try {
     await mongoose.connect(uri, {
        dbName: "DigiSolve",
        bufferCommands: false, // Disable mongoose buffering
      });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB: ", error);
        throw new Error("Error connecting to MongoDB");
    }
}

export default connectDB;