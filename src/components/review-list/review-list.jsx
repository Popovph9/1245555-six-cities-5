import React from "react";
import reviewsProp from "../../store/data-props/reviews.prop";
import ReviewItems from "../review-items/review-items";

const ReviewList = ({reviews}) => {

  return (
    <ul className="reviews__list">
      <ReviewItems
        reviews={reviews}
      />
    </ul>
  );
};

ReviewList.propTypes = {
  reviews: reviewsProp,
};

export default ReviewList;
