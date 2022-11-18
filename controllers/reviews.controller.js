const {
  selectAllReviews,
  selectReviewByID,
  updateReviewVotes,
} = require("../models/reviews.model");

exports.getAllReviews = (req, res, next) => {
  const { category, sort_by, order } = req.query;
  selectAllReviews(category, sort_by, order)
    .then((review) => {
      res.status(200).send({ review });
    })
    .catch(next);
};

exports.getReviewByID = (req, res, next) => {
  const review_id = req.params.review_id;
  console.log(review_id)
  selectReviewByID(review_id)
    .then((review) => {
      res.status(200).send({ review });
    })
    .catch(next);
};

exports.patchReviewVotes = (req, res, next) => {
  const review_id = req.params.review_id;
  const patchContent = req.body;

  updateReviewVotes(review_id, patchContent)
    .then((review) => {
      res.status(200).send({ review });
    })
    .catch(next);
};
