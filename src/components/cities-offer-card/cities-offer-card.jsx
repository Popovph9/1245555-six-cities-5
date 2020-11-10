import React from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card";
import {CITIES_SUBCLASS} from "../../const";
import offersProp from "../../mocks/offers.prop";

const CitiesOfferCard = ({offers, onCardClick, onOfferClick}) => {

  return (
    <OfferCard
      className = {CITIES_SUBCLASS}
      offers = {offers}
      onCardClick = {onCardClick}
      onOfferClick = {onOfferClick}
    />
  );
};

CitiesOfferCard.propTypes = {
  offers: offersProp,
  onCardClick: PropTypes.func.isRequired,
  onOfferClick: PropTypes.func,
};

export default CitiesOfferCard;
