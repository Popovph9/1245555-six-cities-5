import React from "react";
import PropTypes from "prop-types";
import OfferList from "../offer-list/offer-list";
import offersProp from "../../mocks/offers.prop";
import {CITIES_CLASS} from "../../const";

const CitiesOfferList = (props) => {
  const {offersMocks, onCardClick} = props;

  return (
    <OfferList
      className = {CITIES_CLASS}
      offersMocks = {offersMocks}
      onCardClick = {onCardClick}
    />
  );
};

CitiesOfferList.propTypes = {
  offersMocks: offersProp,
  onCardClick: PropTypes.func.isRequired,
};

export default CitiesOfferList;
