const errorHandler = (err, req, res, next) => {
     const code = res.statusCode === 200 ? 500 : code;
     res.status(code);
     res.json({
          message: err.message
     });
};

module.exports ={errorHandler};