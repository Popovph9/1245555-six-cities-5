import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainPage from "../main-page/main-page";
import LoginScreen from "../login-screen/login-screen";
import Favorites from "../favorites/favorites";
import OfferScreen from "../offer-screen/offer-screen";

const App = (props) => {
  const {offersCount} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage offersCount = {offersCount}/>
        </Route>
        <Route exact path="/login">
          <LoginScreen/>
        </Route>
        <Route exact path="/favorites">
          <Favorites/>
        </Route>
        <Route exact path="/offer/:id?">
          <OfferScreen/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offersCount: PropTypes.number.isRequired,
};

export default App;
