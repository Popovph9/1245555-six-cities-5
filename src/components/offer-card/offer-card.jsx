import React from "react";
import {connect} from "react-redux";
import {setActivePin, resetActivePin, getCurrentOffer} from "../../store/action";
import PropTypes from "prop-types";
import {getRating} from "../../utils";
import {STAR_WIDTH} from "../../const";
import offersProp from "../../mocks/offers.prop";
import {PLACES_SUBCLASS} from "../../const";


const OfferCard = ({className, offers, onCardClick, setActivePinAction, resetActivePinAction, getCurrentOfferAction, onOfferClick}) => {

  const placesCardClass = `${className}__card place-card`;
  const citiesCardClass = `${className}__place-card place-card`;

  return (
    <React.Fragment>
      {offers.map((offer, i) => (
        <article
          key={`${i}`}
          className={className !== PLACES_SUBCLASS ? citiesCardClass : placesCardClass}
          onMouseEnter={() => {
            setActivePinAction(offer);
          }}
          onMouseLeave={resetActivePinAction}
          onClick={() => {
            onCardClick();
            getCurrentOfferAction(offer);
            onOfferClick(offer.id);
          }}
        >
          {offer.isPremium && className !== PLACES_SUBCLASS ?
            <div className="place-card__mark">
              <span>Premium</span>
            </div>
            : null}
          <div className={`${className}__image-wrapper place-card__image-wrapper`}>
            <a href="#">
              <img className="place-card__image" src={offer.picture} width="260" height="200" alt="Place image"/>
            </a>
          </div>
          <div className="place-card__info">
            <div className="place-card__price-wrapper">
              <div className="place-card__price">
                <b className="place-card__price-value">&euro;{offer.price}</b>
                <span className="place-card__price-text">&#47;&nbsp;night</span>
              </div>
              <button
                className={offer.isFavorite ? `place-card__bookmark-button--active button` : `place-card__bookmark-button button`} type="button">
                <svg className="place-card__bookmark-icon" width="18" height="19">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
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
      ))}
    </React.Fragment>
  );
};


OfferCard.propTypes = {
  className: PropTypes.string.isRequired,
  offers: offersProp,
  onCardClick: PropTypes.func.isRequired,
  setActivePinAction: PropTypes.func.isRequired,
  resetActivePinAction: PropTypes.func.isRequired,
  getCurrentOfferAction: PropTypes.func.isRequired,
  onOfferClick: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  setActivePinAction(offer) {
    dispatch(setActivePin(offer));
  },
  resetActivePinAction() {
    dispatch(resetActivePin());
  },
  getCurrentOfferAction(offer) {
    dispatch(getCurrentOffer(offer));
  }
});

export {OfferCard};
export default connect(null, mapDispatchToProps)(OfferCard);
