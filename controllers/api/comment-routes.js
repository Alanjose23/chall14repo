const router = require('express').Router();
const { Comment,User } = require('../../models/');
const withAuth = require('../../utils/auth');
// create comment for one specific comment
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
    const comments = newComment.map((post) => post.get({ plain: true }));
    res.render('singlecommment', {comments, loggedIn: req.session.loggedIn});
  } catch (err) {
    res.status(500).json(err);
  }
});
// delete comments


module.exports = router;
