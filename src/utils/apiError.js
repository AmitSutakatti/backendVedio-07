class ApiError extends Error{
    constructor(
        statusCode,
        message ="Something went wrong",
        errors=[],
        stack=""
    ){
        super(message)
        this.statusCode=statusCode
        this.data=null,
        this.message=false,
        this.success=false,
        this.errors=errors

        if(stack){
this.stack=stack
        }
        else{
          Error.captureStackTrace(this,this.constructor)  
        }
    }
}
export {ApiError}

/*
What is This Code For?
Your code creates a custom error class (ApiError) to make error handling in APIs easier and more structured. Instead of just throwing a basic error, this class allows you to:

Set an HTTP status code (like 404 for "Not Found" or 500 for "Server Error").
Provide a custom error message (like "User not found").
Include additional error details (like an array of errors).
Automatically generate a stack trace (which helps debug where the error occurred).
Now, let's go line by line to understand it!

-->class ApiError extends Error {}
 This creates a new custom error class called ApiError that inherits from the built-in Error class.
✅ By extending Error, our class will act like a normal error but with extra features.

-->constructor(statusCode, message = "Something went wrong", errors = [], stack = "") {
he constructor is a special function that runs automatically when you create an ApiError.
✅ It takes four inputs:

statusCode → The HTTP error code (like 404 or 500).
message → The main error message (default: "Something went wrong" if none is given).
errors → Extra error details (like a list of validation errors, default is an empty array []).
stack → Debugging information (used to track where the error happened).

-->super(message);
Calls the built-in Error class with the message you provided.
✅ This makes sure the message property is correctly set.
✅ Example:

javascript
Copy
Edit
let err = new ApiError(404, "User not found");
console.log(err.message); // Output: "User not found"

-->this.statusCode = statusCode;
this.data = null;
this.success = false;
✅ this.statusCode = statusCode; → Stores the HTTP error code (404, 500, etc.).
✅ this.data = null; → Just a placeholder (can be used later if needed).
✅ this.success = false; → Indicates the API request failed (used for API responses).

-->this.errors = errors;
❌ This is a mistake! There is a typo:
✅ It should be:
✅ Example:

javascript
Copy
Edit
let err = new ApiError(400, "Invalid Input", ["Email is required", "Password is too short"]);
console.log(err.errors); 
// Output: ["Email is required", "Password is too short"]

-->if (stack) {
    this.stack = stack;
} else {
    Error.captureStackTrace(this, this.constructor);
}
  ✅ What is a stack trace?
A stack trace shows where the error happened in the code.

This block of code does two things:

If a stack trace is provided (stack is not empty)

The provided stack is directly assigned to this.stack.
This is useful when manually creating errors and preserving the original stack trace.
If stack is not provided (default case)

The Error.captureStackTrace(this, this.constructor) function generates a clean stack trace and assigns it to this.stack.
This ensures that every ApiError instance includes a stack trace, even if the developer doesn’t manually provide one.

Example:

bash
Copy
Edit
ApiError: User not found
    at getUser (/app/controllers/userController.js:15:13)
    at processRequest (/app/middleware/errorHandler.js:27:5)
This tells us:

The error happened in userController.js on line 15.
It was then passed to the error handler on line 27.
✅ What does this code do?

If a custom stack trace (stack) is provided, it uses that.
If no stack trace is provided, Error.captureStackTrace(this, this.constructor) automatically generates one.
This helps debug errors easily by knowing where the issue is.

-->export { ApiError };
✅ This exports the ApiError class so it can be used in other files.
*/