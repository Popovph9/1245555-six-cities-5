import React from "react";
import ReviewItems from "../review-items/review-items";
import currentOfferProp from "../offer-screen/offer-screen.prop";

const ReviewList = (props) => {
  const {currentOffer} = props;

  return (
    <ul className="reviews__list">
      <ReviewItems
        currentOffer = {currentOffer}
      />
    </ul>
  );
};

ReviewList.propTypes = {
  currentOffer: currentOfferProp,
};

export default ReviewList;
