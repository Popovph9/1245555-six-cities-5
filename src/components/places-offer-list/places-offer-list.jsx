import React from "react";
import PropTypes from "prop-types";
import OfferList from "../offer-list/offer-list";
import offersProp from "../../mocks/offers.prop";
import {PLACES_CLASS} from "../../const";

const PlacesOfferList = (props) => {
  const {offers, onCardClick, onOfferClick} = props;

  return (
    <OfferList
      className = {PLACES_CLASS}
      offers = {offers}
      onCardClick = {onCardClick}
      onOfferClick = {onOfferClick}
    />
  );
};

PlacesOfferList.propTypes = {
  offers: offersProp,
  onCardClick: PropTypes.func.isRequired,
  onOfferClick: PropTypes.func,
};

export default PlacesOfferList;
