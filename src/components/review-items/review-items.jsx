import React from "react";
import reviewsProp from "../../store/data-props/reviews.prop";
import {getReviewDate, getReviewFormatDate, sortByDate, getRating} from "../../utils";
import {STAR_WIDTH, RENDERED_REVIEWS} from "../../const";

const ReviewItems = (props) => {
  const {reviews} = props;

  return (
    reviews.sort(sortByDate).slice(0, RENDERED_REVIEWS).map((review, i) => (
      <li key={`reviews__item-${i}`} className="reviews__item">
        <div className="reviews__user user">
          <div className="reviews__avatar-wrapper user__avatar-wrapper">
            <img className="reviews__avatar user__avatar" src={review.user.authorAvatar} width="54" height="54" alt="Reviews avatar"/>
          </div>
          <span className="reviews__user-name">
            {review.user.name}
          </span>
        </div>
        <div className="reviews__info">
          <div className="reviews__rating rating">
            <div className="reviews__stars rating__stars">
              <span style={{width: `${getRating(review.rating, STAR_WIDTH)}%`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <p className="reviews__text">
            {review.comment}
          </p>
          <time className="reviews__time" dateTime={getReviewDate(review.date)}>{getReviewFormatDate(review.date)}</time>
        </div>
      </li>
    ))
  );
};

ReviewItems.propTypes = {
  reviews: reviewsProp,
};

export default ReviewItems;
