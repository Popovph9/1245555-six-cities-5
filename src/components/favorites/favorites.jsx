import React from "react";
import PropTypes from "prop-types";
import offersProp from "../../mocks/offers.prop";
import FavoriteList from "../favorite-list/favorite-list";
import {connect} from "react-redux";
import NoFavoritesPlaceholder from "../no-favorites-placeholder/no-favorites-placeholder";

const Favorites = ({offers, onLogoClick, onCardClick, onOfferClick, currentUser}) => {

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a
                href="#"
                className="header__logo-link"
                onClick={onLogoClick}
              >
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">{currentUser}</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {offers.length === 0
            ? <NoFavoritesPlaceholder/>
            : <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                <FavoriteList
                  favoriteOffers = {offers}
                  onCardClick = {onCardClick}
                  onOfferClick = {onOfferClick}
                />
              </ul>
            </section>}
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </a>
      </footer>
    </div>
  );

};

Favorites.propTypes = {
  offers: offersProp,
  onLogoClick: PropTypes.func.isRequired,
  onCardClick: PropTypes.func.isRequired,
  onOfferClick: PropTypes.func,
  currentUser: PropTypes.string.isRequired,
};

const mapStateToProps = ({DATA, USER}) => ({
  offers: DATA.favoriteOffers,
  currentUser: USER.currentUser,
});

export {Favorites};
export default connect(mapStateToProps)(Favorites);
