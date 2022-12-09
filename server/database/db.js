import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const connection = async() =>{
    const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-inicq2e-shard-00-00.pobxhwt.mongodb.net:27017,ac-inicq2e-shard-00-01.pobxhwt.mongodb.net:27017,ac-inicq2e-shard-00-02.pobxhwt.mongodb.net:27017/?ssl=true&replicaSet=atlas-o7r4ln-shard-0&authSource=admin&retryWrites=true&w=majority`
    try {
       await mongoose.connect(URL, {useUnifiedTopology:true})
       console.log("database connected successfully")
    } catch (error) {
        console.log("Error while connected with the database" , error.message);
    }
}

export default connection;