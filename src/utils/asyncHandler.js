//process to make handler for handling async requests
const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  }
};

export { asyncHandler };

// const asyncHandler = (fn) => async (err, req, res, next) => {
//   try {
//     await fn(err, req, res, next);
//   } catch (error) {
//     res.status(error.code || 500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };
// export { asyncHandler };

