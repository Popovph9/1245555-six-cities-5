import React from "react";
import PropTypes from "prop-types";
import OfferList from "../offer-list/offer-list";
import offersProp from "../../mocks/offers.prop";
import {CITIES_CLASS} from "../../const";

const CitiesOfferList = (props) => {
  const {offers, onCardClick} = props;

  return (
    <OfferList
      className = {CITIES_CLASS}
      offers = {offers}
      onCardClick = {onCardClick}
    />
  );
};

CitiesOfferList.propTypes = {
  offers: offersProp,
  onCardClick: PropTypes.func.isRequired,
};

export default CitiesOfferList;
