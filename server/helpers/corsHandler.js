module.exports.corsHandlers = (req, res, next) => {
  //TODO ADD Access-Control-Allow-Origin for the hosting server
  res.setHeader(
    'Access-Control-Allow-Origin',
    process.env.FRONT_END_URL
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  next();
};
