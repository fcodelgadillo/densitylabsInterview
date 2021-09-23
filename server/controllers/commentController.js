// Schema import
const Comment = require('../models/comment');

// Error Handler import
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');

// this is the controller function to obtain all the comments from the database
// Get all comments => /api/v1/comments
exports.getComments = catchAsyncErrors(async (req, res, next) => {

    const comments = await Comment.find();

    res.status(200).json({
        success: true,
        comments
    })
});


// this is the controller function for comment creation
// Create new comment => api/v1/comment/new
exports.newComment = catchAsyncErrors( async(req, res, next) => {
    const comment = await Comment.create(req.body);

    res.status(201).json({
        success: true,
        comment
    })
});

// this controller will update a comment
// update comment => /api/v1/comment/:id
exports.updateComment = catchAsyncErrors( async (req, res, next) => {

    let comment = await Comment.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true,
        comment
    })
});

// this controller will delete comments
// Delete Comment => /api/v1/comment/:id
exports.deleteComment = catchAsyncErrors( async (req, res, next) => {
    const comment = await Comment.findByIdAndDelete(req.params.id);

    res.status(200).json({
        success: true,
        message: 'Comment deleted'
    })
});
