import React from "react";
import PropTypes from "prop-types";
import offersProp from "../../store/data-props/offers.prop";
import OfferCard from "../offer-card/offer-card";
import {PLACES_SUBCLASS} from "../../const";

const PlacesOfferCard = ({offers, onCardClick, onOfferClick, refreshOfferList, refreshNearOffersList}) => {

  return (
    <OfferCard
      className = {PLACES_SUBCLASS}
      offers = {offers}
      onCardClick = {onCardClick}
      onOfferClick = {onOfferClick}
      refreshOfferList = {refreshOfferList}
      refreshNearOffersList = {refreshNearOffersList}
    />
  );
};

PlacesOfferCard.propTypes = {
  offers: offersProp,
  onCardClick: PropTypes.func.isRequired,
  onOfferClick: PropTypes.func,
  refreshOfferList: PropTypes.func.isRequired,
  refreshNearOffersList: PropTypes.func,
};

export default PlacesOfferCard;
