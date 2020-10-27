import React from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card";
import {CITIES_SUBCLASS} from "../../const";
import offersProp from "../../mocks/offers.prop";

const CitiesOfferCard = (props) => {
  const {offers, onHover, onCardClick} = props;

  return (
    <OfferCard
      className = {CITIES_SUBCLASS}
      offers = {offers}
      onHover = {onHover}
      onCardClick = {onCardClick}
    />
  );
};

CitiesOfferCard.propTypes = {
  offers: offersProp,
  onHover: PropTypes.func.isRequired,
  onCardClick: PropTypes.func.isRequired,
};

export default CitiesOfferCard;
