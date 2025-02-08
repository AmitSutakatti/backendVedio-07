// wrap with try catch and await

//require('dotenv').config({path:'./env'})
import dotenv from 'dotenv' 
import connectDB from "./db/index.js";


dotenv.config({
    path:'./env'
})
connectDB()




















//1St approach
/*(async()=>{
    try{
 await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    }
    catch(error){
console.log("ERROR :",error)
throw error;
    }
})()*/