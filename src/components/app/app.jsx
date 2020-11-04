import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import MainPage from "../main-page/main-page";
import LoginScreen from "../login-screen/login-screen";
import Favorites from "../favorites/favorites";
import OfferScreen from "../offer-screen/offer-screen";
import offersProp from "../../mocks/offers.prop";
import PropTypes from "prop-types";

const App = (props) => {
  const {allOffers, favoriteOffers, currentOffer} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact path="/"
          render={({history}) => (
            <MainPage
              onEmailClick = {() => history.push(`/favorites`)}
              onCardClick = {() => history.push(`/offer`)}
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
              offers = {favoriteOffers}
              onLogoClick = {() => history.push(`/`)}
              onCardClick = {() => history.push(`/offer/:${currentOffer.id}`)}
            />
          )}>
        </Route>
        <Route
          exact path="/offer/:id?"
          render={({history}) => (
            <OfferScreen
              offers = {allOffers}
              currentOffer = {currentOffer}
              onEmailClick = {() => history.push(`/favorites`)}
              onLogoClick = {() => history.push(`/`)}
              onCardClick = {() => history.push(`/offer/:${currentOffer.id}`)}
            />
          )}>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  allOffers: offersProp,
  favoriteOffers: offersProp,
  currentOffer: PropTypes.object,
};

const mapStateToProps = (state) => ({
  allOffers: state.allOffers,
  favoriteOffers: state.favoriteOffers,
  currentOffer: state.currentOffer,
});

export {App};
export default connect(mapStateToProps)(App);
