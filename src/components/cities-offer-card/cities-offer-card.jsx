import React from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card";
import {CITIES_SUBCLASS} from "../../const";
import offersProp from "../../mocks/offers.prop";

const CitiesOfferCard = ({offers, onCardClick}) => {

  return (
    <OfferCard
      className = {CITIES_SUBCLASS}
      offers = {offers}
      onCardClick = {onCardClick}
    />
  );
};

CitiesOfferCard.propTypes = {
  offers: offersProp,
  onCardClick: PropTypes.func.isRequired,
};

export default CitiesOfferCard;
