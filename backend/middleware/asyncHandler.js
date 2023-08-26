const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
  //we don't need to use try catch blocks
};

export default asyncHandler;
