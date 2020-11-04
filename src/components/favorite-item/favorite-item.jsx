import React from "react";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import {getRating} from "../../utils";
import {STAR_WIDTH} from "../../const";
import offerProp from "./favorite-item.prop";
import PropTypes from "prop-types";

const FavoriteItem = ({offer, onCardClick, getCurrentOffer}) => {

  return (
    <article
      onClick={() => {
        onCardClick();
        getCurrentOffer(offer);
      }}
      className="favorites__card place-card"
    >
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={offer.picture} width="150" height="110" alt="Place image"/>
        </a>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`${offer.isFavorite ? `place-card__bookmark-button--active` : `place-card__bookmark-button`} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${getRating(offer.rating, STAR_WIDTH)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{offer.headline}</a>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
};

FavoriteItem.propTypes = {
  offer: offerProp,
  onCardClick: PropTypes.func.isRequired,
  getCurrentOffer: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getCurrentOffer(offer) {
    dispatch(ActionCreator.getCurrentOffer(offer));
  }
});

export {FavoriteItem};
export default connect(null, mapDispatchToProps)(FavoriteItem);
