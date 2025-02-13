class ApiResponse{
    constructor(statusCode,data,message="success"){
        this.statusCode=statusCode,
        this.data=data,
        this.message=message,
        this.success=statusCode < 400
    }
}


/*
This ApiResponse class is used to format API responses in a consistent way. It ensures that every API response includes:

A status code (200, 201, 400, etc.).
The actual data returned from the API.
A message (default: "success").
A success flag (true for success, false for failure).


-->constructor(statusCode, data, message = "success") {
✅ The constructor runs automatically when you create a new ApiResponse object.
✅ It takes three inputs:

statusCode → The HTTP status code (like 200 for success, 400 for error).
data → The actual data to return in the response.
message → A descriptive message about the response (default: "success" if not provided).


-->this.success = statusCode < 400;
✅ Automatically determines if the request was successful.
✅ If statusCode is less than 400, success = true (e.g., 200, 201).
✅ If statusCode is 400 or more, success = false (e.g., 400, 500).
*/

