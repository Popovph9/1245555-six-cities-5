import React from "react";
import PropTypes from "prop-types";
import OfferList from "../offer-list/offer-list";
import offersProp from "../../mocks/offers.prop";
import {PLACES_CLASS} from "../../const";

const PlacesOfferList = (props) => {
  const {offers, onCardClick} = props;

  return (
    <OfferList
      className = {PLACES_CLASS}
      offers = {offers}
      onCardClick = {onCardClick}
    />
  );
};

PlacesOfferList.propTypes = {
  offers: offersProp,
  onCardClick: PropTypes.func.isRequired,
};

export default PlacesOfferList;
