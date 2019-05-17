export const developmentErrors = (err, req, res, next) => {
  const stack = err.stack || '';
  const status = err.status || 500;
  const error = {
    message: err.message,
    stack,
  };
  return res.status(status).json({ data: { error } });
};

export const productionErrros = (err, req, res, next) => {
  const status = err.status || 500;
  return res.status(status).json({ data: { error: err.message } });
};
