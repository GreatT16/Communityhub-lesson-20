const notFound = (req, res, next) => {
  res.status(404).json({ error: `Not Found - ${req.originalUrl}` });
};
const errorHandler = (err, req, res, next) => {
  const status = err.status || 500;
  res.status(status).json({ error: err.message || 'Server Error' });
};
module.exports = { notFound, errorHandler };
