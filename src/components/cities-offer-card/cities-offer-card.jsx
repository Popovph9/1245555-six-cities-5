import React from "react";
import PropTypes from "prop-types";
import offersProp from "../../store/data-props/offers.prop";
import OfferCard from "../offer-card/offer-card";
import {CITIES_SUBCLASS} from "../../const";

const CitiesOfferCard = ({offers, onCardClick, refreshOfferList}) => {

  return (
    <OfferCard
      className={CITIES_SUBCLASS}
      offers={offers}
      onCardClick={onCardClick}
      refreshOfferList={refreshOfferList}
    />
  );
};

CitiesOfferCard.propTypes = {
  offers: offersProp,
  onCardClick: PropTypes.func.isRequired,
  refreshOfferList: PropTypes.func,
};

export default CitiesOfferCard;
