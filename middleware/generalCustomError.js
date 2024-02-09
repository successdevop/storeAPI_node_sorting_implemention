const generalCustomError = (err, req, res, next) => {
  res.status(500).json({
    status: "error",
    msg: "An error occurred, please try again later...",
  });
};

module.exports = generalCustomError;
