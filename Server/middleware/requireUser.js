const requireUser = (req, res, next) => {
  if (res.locals.user) {
    return next();
  }
  return res.status(400).json({ message: "Unauthorized" });
};

module.exports = requireUser;
