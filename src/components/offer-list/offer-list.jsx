import React from "react";
import PropTypes from "prop-types";
import offersProp from "../../store/data-props/offers.prop";
import CitiesOfferCard from "../cities-offer-card/cities-offer-card";
import PlacesOfferCard from "../places-offer-card/places-offer-card";
import OfferCard from "../offer-card/offer-card";
import {CITIES_CLASS, PLACES_CLASS} from "../../const";

const OfferList = ({offers, onCardClick, className, refreshOfferList, refreshNearOffersList}) => {
  switch (className) {
    case CITIES_CLASS:
      return (
        <div className={`${className} places__list `}>
          <CitiesOfferCard
            offers={offers}
            onCardClick={onCardClick}
            refreshOfferList={refreshOfferList}
          />
        </div>
      );
    case PLACES_CLASS:
      return (
        <div className={`${className} places__list `}>
          <PlacesOfferCard
            offers={offers}
            onCardClick={onCardClick}
            refreshOfferList={refreshOfferList}
            refreshNearOffersList={refreshNearOffersList}
          />
        </div>
      );
    default:
      return (
        <div className={`${className} places__list `}>
          <OfferCard
            offers={offers}
            onCardClick={onCardClick}
            refreshOfferList={refreshOfferList}
          />
        </div>
      );
  }
};


OfferList.propTypes = {
  offers: offersProp,
  className: PropTypes.string.isRequired,
  onCardClick: PropTypes.func.isRequired,
  refreshOfferList: PropTypes.func,
  refreshNearOffersList: PropTypes.func,
};

export default React.memo(OfferList);
