import mongoose from "mongoose";

// Connection
const connectDB = async () => {
    try{
        const connect = await mongoose.connect(process.env.MONGO_URL)
        console.log(`Conneted to mongoDB ${connect.connection.host}`)
    }
    catch(error){
        console.log(`Error in Mongodb ${error}`)
    }
}
export default connectDB;