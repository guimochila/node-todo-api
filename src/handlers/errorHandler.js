/* 
  Instead of using try{} catch(e) {} in each controller, we wrap the function in
  catchErrors(), catch any errors they throw, and pass it along to our express middleware with next() 
*/
export const catchErrors = fn => {
  return function handleError(req, res, next) {
    return fn(req, res, next).catch(next);
  };
};

export const developmentErrors = (err, req, res, next) => {
  const stack = err.stack || '';
  const errorDetails = {
    message: err.message,
    status: err.status,
    stack,
  };
  res.status(err.status || 500);
  res.json(errorDetails);
};
