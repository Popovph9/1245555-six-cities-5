import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import CitiesOfferList from "../cities-offer-list/cities-offer-list";
import CitiesList from "../cities-list/cities-list";
import SortingList from "../sorting-list/sorting-list";
import OffersPlaceholder from "../offers-placeholder/offers-placeholder";
import offersProp from "../../mocks/offers.prop";

import MainMap from "../main-map/main-map";

const EMPTY_PAGE_CLASSNAME = `page__main page__main--index page__main--index-empty`;
const MAIN_PAGE_CLASSNAME = `page__main page__main--index`;


const MainPage = (props) => {
  const {onEmailClick, onCardClick, offers, city, changeCity, currentSorting, changeSorting, getOffers, sortOffers, activePin} = props;

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
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

      <main className={offers.length === 0 ? EMPTY_PAGE_CLASSNAME : MAIN_PAGE_CLASSNAME}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList
              currentCity = {city}
              getCity = {changeCity}
              getOffers = {getOffers}
            />
          </section>
        </div>
        <div className="cities">
          {offers.length === 0 ? <OffersPlaceholder city = {city}/>
            : <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offers.length} place{offers.length === 1 ? `` : `s`} to stay in {city}</b>

                <SortingList
                  currentSorting = {currentSorting}
                  changeSorting = {changeSorting}
                  sortOffers = {sortOffers}
                />

                <CitiesOfferList
                  offers = {offers}
                  onCardClick = {onCardClick}
                />
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <MainMap
                    offers = {offers}
                    activePin = {activePin}
                  />
                </section>
              </div>
            </div>}
        </div>
      </main>
    </div>
  );
};

MainPage.propTypes = {
  city: PropTypes.string.isRequired,
  currentSorting: PropTypes.string.isRequired,
  offers: offersProp,
  changeCity: PropTypes.func.isRequired,
  changeSorting: PropTypes.func.isRequired,
  onEmailClick: PropTypes.func.isRequired,
  onCardClick: PropTypes.func.isRequired,
  getOffers: PropTypes.func.isRequired,
  sortOffers: PropTypes.func.isRequired,
  activePin: PropTypes.array
};

const mapStateToProps = (state) => ({
  city: state.city,
  currentSorting: state.currentSorting,
  offers: state.offers,
  activePin: state.activePin
});

const mapDispatchToProps = (dispatch) => ({
  changeCity(evt) {
    dispatch(ActionCreator.changeCity(evt));
  },
  getOffers() {
    dispatch(ActionCreator.getOffers());
  },
  changeSorting(evt) {
    dispatch(ActionCreator.changeSorting(evt));
  },
  sortOffers(evt) {
    dispatch(ActionCreator.sortOffers(evt));
  },
});

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
