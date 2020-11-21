import React from "react";
import PropTypes from "prop-types";
import currentOfferProp from "../../store/data-props/currentOffers.prop";
import CitiesBookmarkButton from "../cities-bookmark-button/cities-bookmark-button";
import PlacesBookmarkButton from "../places-bookmark-button/places-bookmark-button";
import {CITIES_SUBCLASS, PLACES_SUBCLASS} from "../../const";

const ListBookmarkButton = (
    {className,
      offer,
      authorizationStatus,
      changeFavoriteAction,
      refreshOfferList,
      redirectToRoute,
      currentOfferId,
      refreshNearOffersList,
    }
) => {
  switch (className) {
    case CITIES_SUBCLASS:
      return (
        <CitiesBookmarkButton
          offer = {offer}
          authorizationStatus = {authorizationStatus}
          changeFavoriteAction = {changeFavoriteAction}
          refreshOfferList = {refreshOfferList}
          redirectToRoute = {redirectToRoute}
        />
      );
    case PLACES_SUBCLASS:
      return (
        <PlacesBookmarkButton
          offer = {offer}
          authorizationStatus = {authorizationStatus}
          changeFavoriteAction = {changeFavoriteAction}
          refreshOfferList = {refreshOfferList}
          redirectToRoute = {redirectToRoute}
          currentOfferId = {currentOfferId}
          refreshNearOffersList = {refreshNearOffersList}
        />
      );
    default:
      return (
        <CitiesBookmarkButton
          offer = {offer}
          authorizationStatus = {authorizationStatus}
          changeFavoriteAction = {changeFavoriteAction}
          refreshOfferList = {refreshOfferList}
          redirectToRoute = {redirectToRoute}
        />
      );
  }
};

ListBookmarkButton.propTypes = {
  className: PropTypes.string.isRequired,
  offer: currentOfferProp,
  authorizationStatus: PropTypes.string.isRequired,
  changeFavoriteAction: PropTypes.func.isRequired,
  refreshOfferList: PropTypes.func.isRequired,
  redirectToRoute: PropTypes.func.isRequired,
  refreshNearOffersList: PropTypes.func,
  currentOfferId: PropTypes.number,
};

export default ListBookmarkButton;
