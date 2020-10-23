import React from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card";
import {PLACES_SUBCLASS} from "../../const";
import offersProp from "../../mocks/offers.prop";

const PlacesOfferCard = (props) => {
  const {offersMocks, onHover, onCardClick} = props;

  return (
    <OfferCard
      className = {PLACES_SUBCLASS}
      offersMocks = {offersMocks}
      onHover = {onHover}
      onCardClick = {onCardClick}
    />
  );
};

PlacesOfferCard.propTypes = {
  offersMocks: offersProp,
  onHover: PropTypes.func.isRequired,
  onCardClick: PropTypes.func.isRequired,
};

export default PlacesOfferCard;
