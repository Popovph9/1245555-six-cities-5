import React from "react";
import PropTypes from "prop-types";
import offersProp from "../../mocks/offers.prop";
import CitiesOfferCard from "../cities-offer-card/cities-offer-card";
import PlacesOfferCard from "../places-offer-card/places-offer-card";
import OfferCard from "../offer-card/offer-card";
import {CITIES_CLASS} from "../../const";
import {PLACES_CLASS} from "../../const";

const OfferList = ({offers, onCardClick, className, onOfferClick}) => {
  switch (className) {
    case CITIES_CLASS:
      return (
        <div className={`${className} places__list `}>
          <CitiesOfferCard
            offers = {offers}
            onCardClick = {onCardClick}
            onOfferClick = {onOfferClick}
          />
        </div>
      );
    case PLACES_CLASS:
      return (
        <div className={`${className} places__list `}>
          <PlacesOfferCard
            offers = {offers}
            onCardClick = {onCardClick}
            onOfferClick = {onOfferClick}
          />
        </div>
      );
    default:
      return (
        <div className={`${className} places__list `}>
          <OfferCard
            offers = {offers}
            onCardClick = {onCardClick}
            onOfferClick = {onOfferClick}
          />
        </div>
      );
  }
};


OfferList.propTypes = {
  offers: offersProp,
  onCardClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  onOfferClick: PropTypes.func,
};

export default OfferList;
