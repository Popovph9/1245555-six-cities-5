import React from "react";
import PropTypes from "prop-types";
import offersProp from "../../store/data-props/offers.prop";
import OfferList from "../offer-list/offer-list";
import {PLACES_CLASS} from "../../const";

const PlacesOfferList = ({offers, onCardClick, onOfferClick, refreshOfferList, refreshNearOffersList}) => {

  return (
    <OfferList
      className={PLACES_CLASS}
      offers={offers}
      onCardClick={onCardClick}
      onOfferClick={onOfferClick}
      refreshOfferList={refreshOfferList}
      refreshNearOffersList={refreshNearOffersList}
    />
  );
};

PlacesOfferList.propTypes = {
  offers: offersProp,
  onCardClick: PropTypes.func.isRequired,
  onOfferClick: PropTypes.func,
  refreshOfferList: PropTypes.func.isRequired,
  refreshNearOffersList: PropTypes.func,
};

export default PlacesOfferList;
