import React from "react";
import {getReviewDate, getReviewFormatDate} from "../../utils";
import {getRating} from "../../utils";
import {STAR_WIDTH, RENDERED_REVIEWS} from "../../const";
import currentOfferProp from "../offer-screen/offer-screen.prop";

const ReviewItems = (props) => {
  const {currentOffer} = props;

  return (
    currentOffer.reviews.slice(0, RENDERED_REVIEWS).map((review, i) => (
      <li key={`reviews__item-${i}`} className="reviews__item">
        <div className="reviews__user user">
          <div className="reviews__avatar-wrapper user__avatar-wrapper">
            <img className="reviews__avatar user__avatar" src={review.authorAvatar} width="54" height="54" alt="Reviews avatar"/>
          </div>
          <span className="reviews__user-name">
            {review.authorName}
          </span>
        </div>
        <div className="reviews__info">
          <div className="reviews__rating rating">
            <div className="reviews__stars rating__stars">
              <span style={{width: `${getRating(review.grade, STAR_WIDTH)}%`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <p className="reviews__text">
            {review.text}
          </p>
          <time className="reviews__time" dateTime={getReviewDate(review.date)}>{getReviewFormatDate(review.date)}</time>
        </div>
      </li>
    ))
  );
};

ReviewItems.propTypes = {
  currentOffer: currentOfferProp,
};

export default ReviewItems;
