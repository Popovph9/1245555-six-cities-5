import React from "react";
import PropTypes from "prop-types";
import currentOfferProp from "../../store/data-props/currentOffers.prop";
import offersProp from "../../store/data-props/offers.prop";
import userProp from "../../store/data-props/currentUser.prop";
import reviewsProp from "../../store/data-props/reviews.prop";
import {connect} from "react-redux";
import {changeCurrentFavorite} from "../../store/api-actions";
import {redirectToRoute} from "../../store/action";
import CurrentOfferItem from "../current-offer-item/current-offer-item";
import PlacesOfferList from "../places-offer-list/places-offer-list";
import CurrentOfferMap from "../current-offer-map/current-offer-map";
import UserField from "../user-field/user-field";
import {MAX_RENDERED_PHOTOS} from "../../const";

const Room = (props) => {
  const {
    currentOffer,
    reviews,
    nearOffers,
    onEmailClick,
    onLogoClick,
    onCardClick,
    changeFavoriteAction,
    redirectToRouteAction,
    onOfferClick,
    authorizationStatus,
    currentUser,
    getFavorites,
    refreshOfferList,
    refreshNearOffersList,
  } = props;

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
                  <UserField
                    authorizationStatus={authorizationStatus}
                    currentEmail={currentUser.email}
                    onEmailClick={onEmailClick}
                    getFavorites={getFavorites}
                  />
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
              reviews={reviews}
              currentOffer={currentOffer}
              changeFavorites={changeFavoriteAction}
              redirectToRoute={redirectToRouteAction}
              authorizationStatus={authorizationStatus}
              refreshOfferList={refreshOfferList}
            />
          </div>
          <section className="property__map map">
            <CurrentOfferMap
              offers={nearOffers}
              currentOffer={currentOffer}
            />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighborhood</h2>
            <PlacesOfferList
              offers={nearOffers}
              onCardClick={onCardClick}
              onOfferClick={onOfferClick}
              refreshOfferList={refreshOfferList}
              refreshNearOffersList={refreshNearOffersList}
            />
          </section>
        </div>
      </main>
    </div>
  );
};

Room.propTypes = {
  currentOffer: currentOfferProp,
  nearOffers: offersProp,
  reviews: reviewsProp,
  currentUser: userProp,
  authorizationStatus: PropTypes.string.isRequired,
  onEmailClick: PropTypes.func.isRequired,
  onLogoClick: PropTypes.func.isRequired,
  onCardClick: PropTypes.func.isRequired,
  changeFavoriteAction: PropTypes.func.isRequired,
  onOfferClick: PropTypes.func,
  redirectToRouteAction: PropTypes.func.isRequired,
  getFavorites: PropTypes.func.isRequired,
  refreshOfferList: PropTypes.func.isRequired,
  refreshNearOffersList: PropTypes.func.isRequired,
};

const mapStateToProps = ({DATA, STATE, USER}) => ({
  currentOffer: STATE.currentOffer,
  reviews: STATE.reviews,
  nearOffers: DATA.nearOffers,
  authorizationStatus: USER.authorizationStatus,
  currentUser: USER.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  changeFavoriteAction({id, status}) {
    dispatch(changeCurrentFavorite({id, status}));
  },
  redirectToRouteAction(url) {
    dispatch(redirectToRoute(url));
  }
});

export {Room};
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Room));
