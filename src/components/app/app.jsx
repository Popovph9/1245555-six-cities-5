import React from "react";
import {Switch, Route, Router as BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";

import PropTypes from "prop-types";
import offersProp from "../../store/data-props/offers.prop";
import currentOfferProp from "../../store/data-props/currentOffers.prop";

import {getOffers} from "../../store/action";
import PrivateRoute from "../private-route/private-route";
import browserHistory from "../../browser-history";

import Main from "../main/main";
import SignIn from "../sign-in/sign-in";
import Favorites from "../favorites/favorites";
import Room from "../room/room";

import {AppRoute} from "../../const";
import {getValue} from "../../utils";

const App = (props) => {
  const {
    currentOffer,
    getOffersAction,
    loadOfferData,
    getFavorites,
    refreshOfferList,
    refreshNearOffersList,
  } = props;

  getOffersAction();

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route
          exact path={AppRoute.MAIN}
          render={({history}) => (
            <Main
              onEmailClick = {() => {
                history.push(AppRoute.FAVORITES);
              }}
              onCardClick={() => history.push(`${AppRoute.ROOM}/:${currentOffer.id}?`)}
              getFavorites={getFavorites}
              refreshOfferList={refreshOfferList}
            />
          )}>
        </Route>
        <Route
          exact path={AppRoute.SIGN_IN}
          render={({history}) => (
            <SignIn
              onLogoClick={() => history.push(AppRoute.MAIN)}
              getFavorites={getFavorites}
            />
          )}
        >
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.FAVORITES}
          render={({history}) => {
            return (
              <Favorites
                onLogoClick={() => history.push(AppRoute.MAIN)}
                onCardClick={() => history.push(`${AppRoute.ROOM}/:${currentOffer.id}?`)}
              />
            );
          }}
        />
        <Route
          exact path={`${AppRoute.ROOM}/:${currentOffer.id}?`}
          render={({history, match}) => (
            <Room
              id={getValue(match.params)}
              onEmailClick={() => {
                history.push(AppRoute.FAVORITES);
              }}
              getFavorites={getFavorites}
              onLogoClick={() => history.push(AppRoute.MAIN)}
              onCardClick={() => history.push(`${AppRoute.ROOM}/:${currentOffer.id}?`)}
              loadOfferData={loadOfferData}
              refreshOfferList={refreshOfferList}
              refreshNearOffersList={refreshNearOffersList}
            />
          )}>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  allOffers: offersProp,
  currentOffer: currentOfferProp,
  getOffersAction: PropTypes.func.isRequired,
  loadOfferData: PropTypes.func.isRequired,
  getFavorites: PropTypes.func.isRequired,
  refreshOfferList: PropTypes.func.isRequired,
  refreshNearOffersList: PropTypes.func.isRequired,
};

const mapStateToProps = ({DATA, STATE}) => ({
  allOffers: DATA.allOffers,
  currentOffer: STATE.currentOffer,
});

const mapDispatchToProps = (dispatch) => ({
  getOffersAction() {
    dispatch(getOffers());
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
