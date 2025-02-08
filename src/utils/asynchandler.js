const asynhandler=(requestHandler)=>{
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
    }
}


export {asynhandler}




/*const asynchandler=(fn)=>async(req,res,next)=>{
try{
await fn(req,res,next)
}
catch(error){
    res.status(error.code ||400).json({
        success:false,
        message:error.message
    })
}
}*/