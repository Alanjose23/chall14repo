const router = require('express').Router();
const { Comment,User } = require('../../models/');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...req.body,
      userId: req.session.userId,
    });
    res.json(newComment);
  } catch (err) {
    res.status(500).json(err);
  }
});
// create comment route for all comments
router.get('/', withAuth, async (req, res) => {
  try {
    const newComment = await Comment.findAll({
      include: [User],
    });
    res.render('singlecomment', {newComment, loggedIn: req.session.loggedIn});
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
