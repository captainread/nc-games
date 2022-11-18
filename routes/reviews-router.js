const { postComment } = require("../controllers/comments.controller");
const {
  getAllReviews,
  getReviewByID,
  patchReviewVotes,
} = require("../controllers/reviews.controller");

const reviewsRouter = require("express").Router();

reviewsRouter.route("/").get(getAllReviews);

reviewsRouter.route("/:review_id").get(getReviewByID).patch(patchReviewVotes);

reviewsRouter.route("/:review_id/comments").post(postComment)


module.exports = reviewsRouter;