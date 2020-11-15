import React from "react";
import currentOfferProp from "../offer-screen/offer-screen.prop";
import PropTypes from "prop-types";
import OfferReviewForm from "../offer-review-form/offer-review-form";
import ReviewList from "../review-list/review-list";
import {getRating} from "../../utils";
import {STAR_WIDTH} from "../../const";
import {AuthorizationStatus} from "../../const";

const STAR_CLASSNAME = `property__avatar-wrapper user__avatar-wrapper property__avatar-wrapper--pro`;
const CASUAL_CLASSNAME = `property__avatar-wrapper user__avatar-wrapper`;

const CurrentOfferItem = ({currentOffer, reviews, changeFavorites, authorizationStatus}) => {

  return (
    <div className="property__wrapper">
      {currentOffer.isPremium ?
        <div className="property__mark">
          <span>Premium</span>
        </div> : ``}
      <div className="property__name-wrapper">
        <h1 className="property__name">
          {currentOffer.headline}
        </h1>
        <button
          onClick={() => {
            changeFavorites(currentOffer);
          }}
          className={`${currentOffer.isFavorite ? `property__bookmark-button property__bookmark-button--active button` : `property__bookmark-button button` }`} type="button">
          <svg className="property__bookmark-icon" width="31" height="33">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      </div>
      <div className="property__rating rating">
        <div className="property__stars rating__stars">
          <span style={{width: `${getRating(currentOffer.rating, STAR_WIDTH)}%`}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
        <span className="property__rating-value rating__value">{currentOffer.rating}</span>
      </div>
      <ul className="property__features">
        <li className="property__feature property__feature--entire">
          {currentOffer.type}
        </li>
        <li className="property__feature property__feature--bedrooms">
          {currentOffer.bedrooms} Bedrooms
        </li>
        <li className="property__feature property__feature--adults">
                    Max {currentOffer.guests} adult{currentOffer.guests > 1 ? `s` : ``}
        </li>
      </ul>
      <div className="property__price">
        <b className="property__price-value">&euro;{currentOffer.price}</b>
        <span className="property__price-text">&nbsp;night</span>
      </div>
      <div className="property__inside">
        <h2 className="property__inside-title">What&apos;s inside</h2>
        <ul className="property__inside-list">
          {currentOffer.offers.map((offer, i) => (
            <li key={`property__inside-item-${i}`} className="property__inside-item">
              {offer}
            </li>
          ))}
        </ul>
      </div>
      <div className="property__host">
        <h2 className="property__host-title">Meet the host</h2>
        <div className="property__host-user user">
          <div className={currentOffer.host.isSuper ? STAR_CLASSNAME : CASUAL_CLASSNAME}>
            <img className="property__avatar user__avatar" src={currentOffer.host.avatar} width="74" height="74" alt="Host avatar"/>
          </div>
          <span className="property__user-name">
            {currentOffer.host.name}
          </span>
        </div>
        <div className="property__description">
          <p className="property__text">
            {currentOffer.description}
          </p>
        </div>
      </div>

      <section className="property__reviews reviews">
        <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length > 0 ? reviews.length : ``}</span></h2>
        {reviews.length > 0 ?
          <ReviewList
            reviews = {reviews}
          /> : null
        }
        {authorizationStatus === AuthorizationStatus.AUTH ?
          <OfferReviewForm/>
          : null}
      </section>
    </div>
  );
};

CurrentOfferItem.propTypes = {
  currentOffer: currentOfferProp,
  reviews: PropTypes.array,
  changeFavorites: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};

export default CurrentOfferItem;
