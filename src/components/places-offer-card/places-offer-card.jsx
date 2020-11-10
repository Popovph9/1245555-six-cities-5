import React from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card";
import {PLACES_SUBCLASS} from "../../const";
import offersProp from "../../mocks/offers.prop";

const PlacesOfferCard = ({offers, onCardClick, onOfferClick}) => {

  return (
    <OfferCard
      className = {PLACES_SUBCLASS}
      offers = {offers}
      onCardClick = {onCardClick}
      onOfferClick = {onOfferClick}
    />
  );
};

PlacesOfferCard.propTypes = {
  offers: offersProp,
  onCardClick: PropTypes.func.isRequired,
  onOfferClick: PropTypes.func,
};

export default PlacesOfferCard;
