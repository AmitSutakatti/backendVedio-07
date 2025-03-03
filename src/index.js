// wrap with try catch and await

//require('dotenv').config({path:'./env'})
import dotenv from 'dotenv' 
import connectDB from "./db/index.js";
import { app } from './app.js'; // Import the app


dotenv.config({
    path:'./.env'
})
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running at PORT :${process.env.PORT}`);
    })
})
.catch((error)=>{
    console.log("MONGODB connection Failed !! : ",error)
})




















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