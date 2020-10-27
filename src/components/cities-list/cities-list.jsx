import React from "react";
import PropTypes from "prop-types";
import offersProp from "../../mocks/offers.prop";

const CitiesList = (props) => {
  const {offersMocks, currentCity, getCity, getOffers} = props;

  const uniqueCities = Array.from(new Set(offersMocks.map((it) => it.city.name)));

  return (
    <ul className="locations__list tabs__list">
      {uniqueCities.map((it, i) => (
        <li key={`locations__item-${i}`} className="locations__item">
          <a onClick={getOffers} className={it === currentCity ? `locations__item-link tabs__item tabs__item--active` : `locations__item-link tabs__item`} href="#">
            <span onClick={getCity}>{it}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

CitiesList.propTypes = {
  offersMocks: offersProp,
  currentCity: PropTypes.string.isRequired,
  getCity: PropTypes.func.isRequired,
  getOffers: PropTypes.func.isRequired,
};

export default CitiesList;
