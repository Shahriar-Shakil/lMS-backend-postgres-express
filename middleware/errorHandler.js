const { constants } = require("../lib/constants");
const { ValidationError } = require("sequelize");

const errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode ? res.statusCode : 500;
  // Default error response
  let errorResponse = {
    title: "Server Error",
    message: err.message,
    stackTrace: process.env.NODE_ENV === "production" ? null : err.stack, // Hide stack trace in production
  };

  // Check if the error is a Sequelize validation error
  if (err instanceof ValidationError) {
    statusCode = constants.VALIDATION_ERROR;
    const validationErrors = err.errors.map((error) => ({
      field: error.path,
      message: error.message,
    }));

    errorResponse = {
      title: "Validation Failed",
      message: "Validation error(s) occurred.",
      errors: validationErrors,
      stackTrace: process.env.NODE_ENV === "production" ? null : err.stack,
    };
  } else if (err.customError) {
    // Handle custom errors with dynamic title and message
    statusCode = err.statusCode || statusCode;
    errorResponse = {
      title: err.title || errorResponse.title,
      message: err.message,
      stackTrace: process.env.NODE_ENV === "production" ? null : err.stack,
    };
  } else {
    // Handle specific status codes
    switch (statusCode) {
      case constants.NOT_FOUND:
        errorResponse.title = "Not Found";
        errorResponse.message = err.message;
        break;
      case constants.UNAUTHORIZED:
        errorResponse.title = "Unauthorized";
        errorResponse.message =
          "You are not authorized to access this resource.";
        break;
      case constants.FORBIDDEN:
        errorResponse.title = "Forbidden";
        errorResponse.message =
          "You do not have permission to perform this action.";
        break;
      case constants.NO_CONTENT:
        errorResponse.title = "No Content";
        errorResponse.message = "No content is available for this request.";
        break;
      case constants.CONFLICT:
        errorResponse.title = "No Content";
        errorResponse.message = err.message;
        break;

      default:
        break;
    }
  }

  res.status(statusCode).json(errorResponse);
};

module.exports = errorHandler;
