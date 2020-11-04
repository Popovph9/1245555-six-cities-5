import React from "react";
import PropTypes from "prop-types";
import offersProp from "../../mocks/offers.prop";
import CitiesOfferCard from "../cities-offer-card/cities-offer-card";

const OfferList = ({offers, onCardClick, className}) => {

  return (
    <div className={`${className} places__list `}>
      <CitiesOfferCard
        offers = {offers}
        onCardClick = {onCardClick}
      />
    </div>
  );
};

OfferList.propTypes = {
  offers: offersProp,
  onCardClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

export default OfferList;
