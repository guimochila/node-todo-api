export const developmentErrors = (err, req, res, next) => {
  const stack = err.stack || '';
  const error = {
    message: err.message,
    stack,
  };
  return res.status(500).json({ data: { error } });
};

export const productionErrros = (err, req, res, next) => {
  return res.status(500).json({ data: { error: err.message } });
};
