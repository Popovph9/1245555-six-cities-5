import React, {useEffect} from "react";
import PropTypes from "prop-types";
import offersProp from "../../store/data-props/offers.prop";
import L from "leaflet";
import 'leaflet/dist/leaflet.css';
import {PIN_URL, PIN_ACTIVE_URL, PIN_SIZES} from "../../const";

const MainMap = ({offers, activePin}) => {

  useEffect(() => {
    const city = [offers[0].city.location.latitude, offers[0].city.location.longitude];

    const zoom = offers[0].city.location.zoom;

    const map = L.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });

    map.setView(city, zoom);

    L.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    }).addTo(map);

    const icon = L.icon({
      iconUrl: PIN_URL,
      iconSize: PIN_SIZES,
    });

    offers.map((offer) => {
      L.marker([offer.location.latitude, offer.location.longitude], {icon}).addTo(map).on(`mouseover`, (evt) => {
        evt.target._icon.src = PIN_ACTIVE_URL;
      }).on(`mouseout`, (evt) => {
        evt.target._icon.src = PIN_URL;
      });
    });


    if (activePin) {
      const iconOptions = {
        iconUrl: PIN_ACTIVE_URL,
        iconSize: PIN_SIZES,
      };

      const customIcon = L.icon(iconOptions);

      const markerOptions = {
        icon: customIcon
      };

      const marker = L.marker(activePin, markerOptions);
      marker.addTo(map);
    }

    return () => {
      if (map !== undefined) {
        map.remove();
      }
    };
  });

  return (
    <div
      style={{height: `100%`}}
      id="map"
    ></div>
  );
};

MainMap.propTypes = {
  offers: offersProp,
  activePin: PropTypes.arrayOf(PropTypes.number),
};

export default MainMap;
