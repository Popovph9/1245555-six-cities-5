import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import CitiesOfferList from "../cities-offer-list/cities-offer-list";
import Map from "../map/map";
import CitiesList from "../cities-list/cities-list";
import offersProp from "../../mocks/offers.prop";

const MainPage = (props) => {
  const {offersMocks, onEmailClick, onCardClick, offers, city, changeCity, getOffers} = props;

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

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList
              offersMocks = {offersMocks}
              currentCity = {city}
              getCity = {changeCity}
              getOffers = {getOffers}
            />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} place{offers.length === 1 ? `` : `s`} to stay in {city}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex="0">
                  Popular

                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>


                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex="0">Popular</li>
                  <li className="places__option" tabIndex="0">Price: low to high</li>
                  <li className="places__option" tabIndex="0">Price: high to low</li>
                  <li className="places__option" tabIndex="0">Top rated first</li>
                </ul>
                {/* </div>
                <select className="places__sorting-type" id="places-sorting">
                  <option className="places__option" value="popular" selected="">Popular</option>
                  <option className="places__option" value="to-high">Price: low to high</option>
                  <option className="places__option" value="to-low">Price: high to low</option>
                  <option className="places__option" value="top-rated">Top rated first</option>
                </select>
                </div> */}
              </form>
              <CitiesOfferList
                offers = {offers}
                onCardClick = {onCardClick}
              />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map
                  offers = {offers}
                />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

MainPage.propTypes = {
  offersMocks: offersProp,
  city: PropTypes.string.isRequired,
  offers: offersProp,
  changeCity: PropTypes.func.isRequired,
  onEmailClick: PropTypes.func.isRequired,
  onCardClick: PropTypes.func.isRequired,
  getOffers: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  offersMocks: state.offersMocks,
  city: state.city,
  offers: state.offers,
});

const mapDispatchToProps = (dispatch) => ({
  changeCity(evt) {
    dispatch(ActionCreator.changeCity(evt));
  },
  getOffers() {
    dispatch(ActionCreator.getOffers());
  },
});

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
