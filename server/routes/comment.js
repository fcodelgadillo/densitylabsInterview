const express = require('express');
const router = express.Router();

// this object destructuring will hold all the controllers
const { getComments, newComment, updateComment, deleteComment } = require('../controllers/commentController');

// get request for all comments
router.route('/comments').get(getComments);
router.route('/comment/new').post(newComment);
router.route('/comment/:id').put(updateComment);
router.route('/comment/:id').delete(deleteComment);

module.exports = router;
