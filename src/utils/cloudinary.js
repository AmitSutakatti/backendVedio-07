import {v2 as cloudinary} from "cloudinary";
import fs from "fs";
cloudinary.config({
     // Configuration
    
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY,  
        api_secret: process.env.CLOUDINARY_API_SECRET, 
});
const uploadOnCloudinary=async (localFilePath)=>{
    try{
if(!localFilePath) return null;
//upload the file on cloudinary
const response=await cloudinary.uploader.upload(localFilePath,{
    resource_type:"auto"
})
// file has been uploaded successfuly
console.log("file is uploaded on cloudinary",response.url);
return response;

    }
    catch(error){
             fs.unlinkSync(localilePath)//removes the locally saved temporaray file as the upload operation got failed
             return null;
    }
}

export {uploadOnCloudinary}