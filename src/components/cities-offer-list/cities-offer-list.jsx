import React from "react";
import PropTypes from "prop-types";
import OfferList from "../offer-list/offer-list";
import offersProp from "../../mocks/offers.prop";
import {CITIES_CLASS} from "../../const";

const CitiesOfferList = (props) => {
  const {offers, onCardClick, onOfferClick} = props;

  return (
    <OfferList
      className = {CITIES_CLASS}
      offers = {offers}
      onCardClick = {onCardClick}
      onOfferClick = {onOfferClick}
    />
  );
};

CitiesOfferList.propTypes = {
  offers: offersProp,
  onCardClick: PropTypes.func.isRequired,
  onOfferClick: PropTypes.func.isRequired,
};

export default CitiesOfferList;
