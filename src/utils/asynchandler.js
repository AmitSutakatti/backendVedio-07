const asynhandler=(requestHandler)=>{
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err));
    }
}


export {asynhandler}


/*
-->Your code defines an async error handler function called asynhandler. This function is used to wrap asynchronous request handlers in Express.js so that errors are automatically caught and passed to the next() function, preventing the need for repetitive try-catch blocks.


-->const asynhandler = (requestHandler) => {
✅ Defines a function called asynhandler that takes a request handler (requestHandler) as an argument.
✅ requestHandler is an asynchronous function (e.g., an Express route handler).


-->(req, res, next) => {
✅ This is an anonymous function that takes three arguments:

req → The request object.
res → The response object.
next → A function used to pass errors to Express error handling middleware.


-->Promise.resolve(requestHandler(req, res, next))
✅ Calls the requestHandler function with req, res, and next.
✅ Since requestHandler is asynchronous, it returns a Promise.
✅ Promise.resolve() ensures that even if requestHandler does not return a Promise, it will be wrapped as one.



-->.catch((err) => next(err))
✅ If the requestHandler throws an error or rejects the Promise, the .catch() block will catch the error and pass it to next(err).
✅ next(err) sends the error to Express's built-in error handler.








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