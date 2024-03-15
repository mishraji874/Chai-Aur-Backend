const asyncHandler = (requestHandler) => {
    (req, res,next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((error) => next(error));
    }
};




// Using try and catch block

// const asyncHandler = () => {} //simple one
// const asyncHandler = (func) => () => {} //using more than one function as a parameter
// const asyncHandler = (func) => async () => {} //async one

// Using try and catch block

// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next);
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message
//         });
//     }
// }

export {asyncHandler};