import React from "react";
import PropTypes from "prop-types";
import {CITIES_NAMES} from "../../const";
import {ACTIVE_CLASSNAME, CASUAL_CLASSNAME} from "../../const";


const CitiesList = ({currentCity, getCity, getOffers}) => {
  return (
    <ul className="locations__list tabs__list">
      {CITIES_NAMES.map((it, i) => (
        <li key={`locations__item-${i}`} className="locations__item">
          <a onClick={getOffers} className={it === currentCity ? ACTIVE_CLASSNAME : CASUAL_CLASSNAME} href="#">
            <span onClick={getCity}>{it}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

CitiesList.propTypes = {
  currentCity: PropTypes.string.isRequired,
  getCity: PropTypes.func.isRequired,
  getOffers: PropTypes.func.isRequired,
};

export default React.memo(CitiesList);
