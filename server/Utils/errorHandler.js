
class ErrorHandler extends Error{

    constructor(message, stateCode){
        // Calls the constructor of the parent 'Error' class. This ensures that the ErrorHandler ubstabce us properly set yp as an Error object
        super(message);
        this.statusCode = stateCode

        // Create stack property
        // Used to capture the stack trace
        Error.captureStackTrace(this, this.constructor)
    }
}

export default ErrorHandler;