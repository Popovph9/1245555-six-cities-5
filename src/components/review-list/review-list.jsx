import React from "react";
import PropTypes from "prop-types";
import ReviewItems from "../review-items/review-items";

const ReviewList = (props) => {
  const {reviews} = props;

  return (
    <ul className="reviews__list">
      <ReviewItems
        reviews = {reviews}
      />
    </ul>
  );
};

ReviewList.propTypes = {
  reviews: PropTypes.array,
};

export default ReviewList;
