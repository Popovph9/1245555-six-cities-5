import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, Router as BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import {getOffers} from "../../store/action";
import PrivateRoute from "../private-route/private-route";
import MainPage from "../main-page/main-page";
import LoginScreen from "../login-screen/login-screen";
import Favorites from "../favorites/favorites";
import OfferScreen from "../offer-screen/offer-screen";
import offersProp from "../../mocks/offers.prop";
import browserHistory from "../../browser-history";

const App = (props) => {
  const {currentOffer, getOffersAction, onOfferClick} = props;

  getOffersAction();

  return (
    <BrowserRouter history={browserHistory}>
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
        <Route
          exact path="/login"
          render={({history}) => (
            <LoginScreen
              onLogoClick = {() => history.push(`/`)}
            />
          )}
        >
        </Route>
        <PrivateRoute
          exact
          path={`/favorites`}
          render={({history}) => {
            return (
              <Favorites
                onLogoClick = {() => history.push(`/`)}
                onCardClick = {() => history.push(`/offer/:${currentOffer.id}`)}
                onOfferClick = {onOfferClick}
              />
            );
          }}
        />
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
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
