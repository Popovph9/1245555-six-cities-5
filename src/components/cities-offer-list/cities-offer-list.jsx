import React from "react";
import PropTypes from "prop-types";
import OfferList from "../offer-list/offer-list";
import offersProp from "../../store/data-props/offers.prop";
import {CITIES_CLASS} from "../../const";

const CitiesOfferList = ({offers, onCardClick, refreshOfferList}) => {

  return (
    <OfferList
      className={CITIES_CLASS}
      offers={offers}
      onCardClick={onCardClick}
      refreshOfferList={refreshOfferList}
    />
  );
};

CitiesOfferList.propTypes = {
  offers: offersProp,
  refreshOfferList: PropTypes.func.isRequired,
  onCardClick: PropTypes.func.isRequired,
};

export default CitiesOfferList;
