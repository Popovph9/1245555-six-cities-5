import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {getRating} from "../../utils";
import {STAR_WIDTH} from "../../const";
import ReviewForm from "../review-form/review-form";
import ReviewList from "../review-list/review-list";
import currentOfferProp from "../offer-screen/offer-screen.prop";
import PlacesOfferList from "../places-offer-list/places-offer-list";
import offersProp from "../../mocks/offers.prop";
import OffersMap from "../offers-map/offers-map";
import {AMSTER_COORDS} from "../../const";

const MAX_RENDERED_PHOTOS = 6;
const STAR_CLASSNAME = `property__avatar-wrapper user__avatar-wrapper property__avatar-wrapper--pro`;
const CASUAL_CLASSNAME = `property__avatar-wrapper user__avatar-wrapper`;

class OfferScreen extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {currentOffer, offers, onEmailClick, onLogoClick, onCardClick} = this.props;

    return (
      <div className="page">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a className="header__logo-link" href="#" onClick={onLogoClick}>
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
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
              <div className="property__wrapper">
                {currentOffer.isPremium ?
                  <div className="property__mark">
                    <span>Premium</span>
                  </div> : ``}
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {currentOffer.headline}
                  </h1>
                  <button className="property__bookmark-button button" type="button">
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
                  <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{currentOffer.reviews.length > 0 ? currentOffer.reviews.length : ``}</span></h2>
                  {currentOffer.reviews.length > 0 ?
                    <ReviewList
                      currentOffer = {currentOffer}
                    /> : ``
                  }

                  <ReviewForm/>
                </section>
              </div>
            </div>
            <section className="property__map map">
              <OffersMap
                coords = {AMSTER_COORDS}
                offers = {offers}
                currentOffer = {currentOffer}
              />
            </section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighborhood</h2>
              <PlacesOfferList
                offers = {offers}
                onCardClick = {onCardClick}
              />
            </section>
          </div>
        </main>
      </div>
    );
  }
}

OfferScreen.propTypes = {
  currentOffer: currentOfferProp,
  onEmailClick: PropTypes.func.isRequired,
  onLogoClick: PropTypes.func.isRequired,
  offers: offersProp,
  onCardClick: PropTypes.func.isRequired,
};

export default OfferScreen;
