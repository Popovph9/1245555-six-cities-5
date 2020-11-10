import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {changeFavorite} from "../../store/action";
import CurrentOfferItem from "../current-offer-item/current-offer-item";
import currentOfferProp from "../offer-screen/offer-screen.prop";
import PlacesOfferList from "../places-offer-list/places-offer-list";
import offersProp from "../../mocks/offers.prop";
import CurrentOfferMap from "../current-offer-map/current-offer-map";

const MAX_RENDERED_PHOTOS = 6;

const OfferScreen = (props) => {
  const {currentOffer, reviews, nearOffers, onEmailClick, onLogoClick, onCardClick, changeFavoriteAction, onOfferClick} = props;

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="#" onClick={onLogoClick}>
                <img className="header__logo" src="/img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#" onClick={onEmailClick}>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {currentOffer.photos.slice(0, MAX_RENDERED_PHOTOS).map((photo, i) => (
                <div key={`${i}`} className="property__image-wrapper">
                  <img className="property__image" src={photo} alt="Photo studio"/>
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <CurrentOfferItem
              reviews = {reviews}
              currentOffer = {currentOffer}
              changeFavorites = {changeFavoriteAction}
            />
          </div>
          <section className="property__map map">
            <CurrentOfferMap
              offers = {nearOffers}
              currentOffer = {currentOffer}
            />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighborhood</h2>
            <PlacesOfferList
              offers = {nearOffers}
              onCardClick = {onCardClick}
              onOfferClick = {onOfferClick}
            />
          </section>
        </div>
      </main>
    </div>
  );
};

OfferScreen.propTypes = {
  currentOffer: currentOfferProp,
  onEmailClick: PropTypes.func.isRequired,
  onLogoClick: PropTypes.func.isRequired,
  reviews: PropTypes.array,
  onCardClick: PropTypes.func.isRequired,
  changeFavoriteAction: PropTypes.func.isRequired,
  onOfferClick: PropTypes.func,
  nearOffers: offersProp,
};

const mapStateToProps = ({DATA, STATE}) => ({
  currentOffer: STATE.currentOffer,
  reviews: STATE.reviews,
  nearOffers: DATA.nearOffers,
});

const mapDispatchToProps = (dispatch) => ({
  changeFavoriteAction(offer) {
    dispatch(changeFavorite(offer));
  }
});

export {OfferScreen};
export default connect(mapStateToProps, mapDispatchToProps)(OfferScreen);
