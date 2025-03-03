import { asynchandler } from "../utils/asynchandler.js";
import {ApiError} from "../utils/apiError.js"
import {User} from "../models/user.model.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"
import { ApiResponse } from "../utils/apiResponse.js";
const registerUser=asynchandler(async(req,res)=>{
 //get user details from frontend
 //validation-not empty
 //check if user aleready exists:username & email
 //check for images ,check for avatar
 //upload them to cloudinary,avatar
 //create user object-create entry in db
 //remove password and refresh token field from response
 //check for user creation 
 //return response
const{fullname,email,username,password} =req.body
console.log("email : ",email);

//if(fullname===""){throw new ApiError(400,"fullname required")}  same do it for all [email,username,passwrod ]

//another shortcut way is given below

if(
    [fullname,email,username,password].some((filed)=>field?.trim()==="")
){
    throw new ApiError(400,"All fileds are required")
}
const existedUser=await User.findOne({
    $or:[{username},{email}]
})
if(existedUser){
    throw new ApiError(409,"User with email or username is logged in already")
}
const avatarLocalPath=req.files?.avatar[0]?.path;
const coverImageLocalPath =req.files?.coverImage[0]?.path;
if(!avatarLocalPath){
    throw new ApiError(400,"Avatar file is must ")
}
const avatar=await uploadOnCloudinary(avatarLocalPath)
const coverImage=await uploadOnCloudinary(coverImageLocalPath)
if(!avatar){
    throw new ApiError(400,"Avatar file is required")
}
const user=await User.create({
    fullname,
    avatar:avatar.url,
    coverImage:coverImage?.url || "",
    email,
    password,
    username:username.toLowerCase()
})

const createdUser=await User.findById(user._id).select(
    "-password -refreshToken"
)

if(!createdUser){
    throw new ApiError(500,"Something went wrong from our side")
}
return res.status(201).json(
    new ApiResponse(200,createdUser,"User registered successfully")
)

})

export {registerUser}