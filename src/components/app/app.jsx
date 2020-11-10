import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import {getOffers, getFavorites} from "../../store/action";
import MainPage from "../main-page/main-page";
import LoginScreen from "../login-screen/login-screen";
import Favorites from "../favorites/favorites";
import OfferScreen from "../offer-screen/offer-screen";
import offersProp from "../../mocks/offers.prop";

const App = (props) => {
  const {currentOffer, getOffersAction, getFavoritesAction, onOfferClick} = props;


  getOffersAction();
  getFavoritesAction();


  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact path="/"
          render={({history}) => (
            <MainPage
              onEmailClick = {() => history.push(`/favorites`)}
              onCardClick = {() => history.push(`/offer`)}
              onOfferClick = {onOfferClick}
            />
          )}>
        </Route>
        <Route exact path="/login">
          <LoginScreen/>
        </Route>
        <Route
          exact path="/favorites"
          render={({history}) => (
            <Favorites
              onLogoClick = {() => history.push(`/`)}
              onCardClick = {() => history.push(`/offer/:${currentOffer.id}`)}
              onOfferClick = {onOfferClick}
            />
          )}>
        </Route>
        <Route
          exact path="/offer/:id?"
          render={({history}) => (
            <OfferScreen
              onEmailClick = {() => history.push(`/favorites`)}
              onLogoClick = {() => history.push(`/`)}
              onCardClick = {() => history.push(`/offer/:${currentOffer.id}`)}
              onOfferClick = {onOfferClick}
            />
          )}>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  allOffers: offersProp,
  currentOffer: PropTypes.object,
  getOffersAction: PropTypes.func.isRequired,
  getFavoritesAction: PropTypes.func.isRequired,
  onOfferClick: PropTypes.func.isRequired,
};

const mapStateToProps = ({DATA, STATE}) => ({
  allOffers: DATA.allOffers,
  currentOffer: STATE.currentOffer,
});

const mapDispatchToProps = (dispatch) => ({
  getOffersAction() {
    dispatch(getOffers());
  },
  getFavoritesAction() {
    dispatch(getFavorites());
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
