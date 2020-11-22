import React from "react";
import PropTypes from "prop-types";
import offersProp from "../../store/data-props/offers.prop";
import FavoriteItem from "../favorite-item/favorite-item";

const FavoriteList = ({favoriteOffers, onCardClick, onOfferClick}) => {
  const uniqCities = Array.from(new Set(favoriteOffers.map((it) => it.city.name)));

  return (
    uniqCities.map((city, id) => (
      <li key={id} className="favorites__locations-items">
        <div className="favorites__locations locations locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="#">
              <span>{city}</span>
            </a>
          </div>
        </div>
        <div className="favorites__places">

          {favoriteOffers.filter((offer) => offer.city.name === city).map((offer, i) => (
            <FavoriteItem
              key={i}
              offer={offer}
              onCardClick={onCardClick}
              onOfferClick={onOfferClick}
            />
          ))}
        </div>
      </li>
    ))
  );
};

FavoriteList.propTypes = {
  favoriteOffers: offersProp,
  onCardClick: PropTypes.func.isRequired,
  onOfferClick: PropTypes.func,
};

export default FavoriteList;
