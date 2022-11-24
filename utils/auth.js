const withAuth = (req, res, next) => {
  if (!req.session.userId) {
    res.redirect("/login");
  } else {
    next();
  }
};
// created with auth to provide field to get, put, and post requests
module.exports = withAuth;
