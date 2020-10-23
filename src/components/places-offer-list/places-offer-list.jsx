import React from "react";
import PropTypes from "prop-types";
import OfferList from "../offer-list/offer-list";
import offersProp from "../../mocks/offers.prop";
import {PLACES_CLASS} from "../../const";

const PlacesOfferList = (props) => {
  const {offersMocks, onCardClick} = props;

  return (
    <OfferList
      className = {PLACES_CLASS}
      offersMocks = {offersMocks}
      onCardClick = {onCardClick}
    />
  );
};

PlacesOfferList.propTypes = {
  offersMocks: offersProp,
  onCardClick: PropTypes.func.isRequired,
};

export default PlacesOfferList;
