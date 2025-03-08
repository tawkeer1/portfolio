import mongoose from "mongoose";

let initialized = false; 
export const connect=async ()=>{
    mongoose.set('strictQuery',true);
    if(initialized) {
        console.log("Already connected to monogdb");
        return;
    }
    try{
        await mongoose.connect(process.env.MONGODB_URI,{
            dbName: 'portfolio'
        })
        initialized = true;
        console.log("Connected to mongodb")
    }
    catch(error){
        console.log("mongo connect error",error)
    }
}