import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainPage from "../main-page/main-page";
import LoginScreen from "../login-screen/login-screen";
import Favorites from "../favorites/favorites";
import OfferScreen from "../offer-screen/offer-screen";
import offersProp from "../../mocks/offers.prop";

const App = (props) => {
  const {offersCount, offersMocks} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact
          path="/"
          render={({history}) => (
            <MainPage
              offersCount = {offersCount}
              offersMocks = {offersMocks}
              onEmailClick = {() => history.push(`/favorites`)}
              onCardClick = {() => history.push(`/offer`)}
            />
          )}>
        </Route>
        <Route exact path="/login">
          <LoginScreen/>
        </Route>
        <Route exact
          path="/favorites"
          render={({history}) => (
            <Favorites
              offersMocks = {offersMocks}
              onLogoClick = {() => history.push(`/`)}
            />
          )}>
        </Route>
        <Route exact
          path="/offer"
          render={({history}) => (
            <OfferScreen
              offersMocks = {offersMocks}
              onCardClick = {() => history.push(`/offer`)}
              currentOffer = {offersMocks[0]}
              onEmailClick = {() => history.push(`/favorites`)}
              onLogoClick = {() => history.push(`/`)}
            />
          )}>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offersCount: PropTypes.number.isRequired,
  offersMocks: offersProp,
};

export default App;
