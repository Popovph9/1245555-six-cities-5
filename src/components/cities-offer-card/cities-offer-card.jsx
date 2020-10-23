import React from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card";
import {CITIES_SUBCLASS} from "../../const";
import offersProp from "../../mocks/offers.prop";

const CitiesOfferCard = (props) => {
  const {offersMocks, onHover, onCardClick} = props;

  return (
    <OfferCard
      className = {CITIES_SUBCLASS}
      offersMocks = {offersMocks}
      onHover = {onHover}
      onCardClick = {onCardClick}
    />
  );
};

CitiesOfferCard.propTypes = {
  offersMocks: offersProp,
  onHover: PropTypes.func.isRequired,
  onCardClick: PropTypes.func.isRequired,
};

export default CitiesOfferCard;
