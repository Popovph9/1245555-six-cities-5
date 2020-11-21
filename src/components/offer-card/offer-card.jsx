import React from "react";
import {connect} from "react-redux";
import {setActivePin, resetActivePin, getCurrentOffer, redirectToRoute} from "../../store/action";
import {changeFavorite} from "../../store/api-actions";
import PropTypes from "prop-types";
import offersProp from "../../store/data-props/offers.prop";
import {getRating} from "../../utils";
import {STAR_WIDTH, PLACES_SUBCLASS} from "../../const";
import ListBookmarkButton from "../list-bookmark-button/list-bookmark-button";

const OfferCard = (
    {className,
      offers,
      onCardClick,
      setActivePinAction,
      resetActivePinAction,
      getCurrentOfferAction,
      onOfferClick,
      authorizationStatus,
      changeFavoriteAction,
      refreshOfferList,
      redirectToRouteAction,
      currentOfferId,
      refreshNearOffersList,
    }
) => {
  const placesCardClass = `${className}__card place-card`;
  const citiesCardClass = `${className}__place-card place-card`;

  const onClick = (offer) => {
    getCurrentOfferAction(offer);
    onOfferClick(offer.id);
    onCardClick();
  };

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
        >
          {offer.isPremium && className !== PLACES_SUBCLASS ?
            <div className="place-card__mark">
              <span>Premium</span>
            </div>
            : null}
          <div className={`${className}__image-wrapper place-card__image-wrapper`}>
            <a>
              <img className="place-card__image" src={offer.picture} width="260" height="200" alt="Place image"/>
            </a>
          </div>
          <div className="place-card__info">
            <div className="place-card__price-wrapper">
              <div className="place-card__price">
                <b className="place-card__price-value">&euro;{offer.price}</b>
                <span className="place-card__price-text">&#47;&nbsp;night</span>
              </div>
              <ListBookmarkButton
                className = {className}
                offer = {offer}
                authorizationStatus = {authorizationStatus}
                changeFavoriteAction = {changeFavoriteAction}
                refreshOfferList = {refreshOfferList}
                redirectToRoute = {redirectToRouteAction}
                currentOfferId = {currentOfferId}
                refreshNearOffersList = {refreshNearOffersList}
              />
            </div>
            <div className="place-card__rating rating">
              <div className="place-card__stars rating__stars">
                <span style={{width: `${getRating(offer.rating, STAR_WIDTH)}%`}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
            </div>
            <h2
              className="place-card__name"
              onClick={() => {
                onClick(offer);
              }}
            >
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
  authorizationStatus: PropTypes.string.isRequired,
  currentOfferId: PropTypes.number,
  onCardClick: PropTypes.func.isRequired,
  setActivePinAction: PropTypes.func.isRequired,
  resetActivePinAction: PropTypes.func.isRequired,
  getCurrentOfferAction: PropTypes.func.isRequired,
  onOfferClick: PropTypes.func,
  changeFavoriteAction: PropTypes.func.isRequired,
  refreshOfferList: PropTypes.func,
  redirectToRouteAction: PropTypes.func,
  refreshNearOffersList: PropTypes.func,
};

const mapStateToProps = ({USER, STATE}) => ({
  authorizationStatus: USER.authorizationStatus,
  currentOfferId: STATE.currentOffer.id,
});

const mapDispatchToProps = (dispatch) => ({
  setActivePinAction(offer) {
    dispatch(setActivePin(offer));
  },
  resetActivePinAction() {
    dispatch(resetActivePin());
  },
  getCurrentOfferAction(offer) {
    dispatch(getCurrentOffer(offer));
  },
  changeFavoriteAction({id, status}) {
    dispatch(changeFavorite({id, status}));
  },
  redirectToRouteAction(url) {
    dispatch(redirectToRoute(url));
  }
});

export {OfferCard};
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(OfferCard));
