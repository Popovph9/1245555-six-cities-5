import React from "react";
import PropTypes from "prop-types";
import offersProp from "../../store/data-props/offers.prop";
import userProp from "../../store/data-props/currentUser.prop";
import {connect} from "react-redux";
import {changeCity, getOffers, changeSorting, sortOffers} from "../../store/action";
import {EMPTY_PAGE_CLASSNAME, MAIN_PAGE_CLASSNAME} from "../../const";
import CitiesOfferList from "../cities-offer-list/cities-offer-list";
import CitiesList from "../cities-list/cities-list";
import SortingList from "../sorting-list/sorting-list";
import OffersPlaceholder from "../offers-placeholder/offers-placeholder";
import UserField from "../user-field/user-field";
import MainMap from "../main-map/main-map";

const Main = (props) => {
  const {
    onEmailClick,
    onCardClick,
    offers,
    city,
    changeCityAction,
    currentSorting,
    changeSortingAction,
    getOffersAction,
    sortOffersAction,
    activePin,
    authorizationStatus,
    currentUser,
    getFavorites,
    refreshOfferList,
  } = props;

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

      <main className={offers.length === 0 ? EMPTY_PAGE_CLASSNAME : MAIN_PAGE_CLASSNAME}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList
              currentCity={city}
              getCity={changeCityAction}
              getOffers={getOffersAction}
            />
          </section>
        </div>
        <div className="cities">
          {offers.length === 0 ?
            <OffersPlaceholder
              city={city}
            /> :
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offers.length} place{offers.length === 1 ? `` : `s`} to stay in {city}</b>

                <SortingList
                  currentSorting={currentSorting}
                  changeSorting={changeSortingAction}
                  sortOffers={sortOffersAction}
                />

                <CitiesOfferList
                  offers={offers}
                  onCardClick={onCardClick}
                  refreshOfferList={refreshOfferList}
                />
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <MainMap
                    offers={offers}
                    activePin={activePin}
                  />
                </section>
              </div>
            </div>}
        </div>
      </main>
    </div>
  );
};

Main.propTypes = {
  city: PropTypes.string.isRequired,
  currentSorting: PropTypes.string,
  offers: offersProp,
  activePin: PropTypes.arrayOf(PropTypes.number),
  authorizationStatus: PropTypes.string.isRequired,
  currentUser: userProp,
  changeCityAction: PropTypes.func.isRequired,
  changeSortingAction: PropTypes.func.isRequired,
  onEmailClick: PropTypes.func.isRequired,
  onCardClick: PropTypes.func.isRequired,
  getOffersAction: PropTypes.func.isRequired,
  sortOffersAction: PropTypes.func.isRequired,
  getFavorites: PropTypes.func.isRequired,
  refreshOfferList: PropTypes.func.isRequired,
};

const mapStateToProps = ({DATA, STATE, USER}) => ({
  city: DATA.city,
  currentSorting: STATE.currentSorting,
  offers: DATA.offers,
  activePin: STATE.activePin,
  authorizationStatus: USER.authorizationStatus,
  currentUser: USER.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  changeCityAction(evt) {
    dispatch(changeCity(evt));
  },
  getOffersAction() {
    dispatch(getOffers());
  },
  changeSortingAction(evt) {
    dispatch(changeSorting(evt));
  },
  sortOffersAction(evt) {
    dispatch(sortOffers(evt));
  },
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
