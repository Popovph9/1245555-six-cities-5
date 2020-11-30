import React, {useEffect, useState} from "react";
import L from "leaflet";
import 'leaflet/dist/leaflet.css';
import {PIN_URL, PIN_ACTIVE_URL, PIN_SIZES, RENDERED_PINS} from "../../const";
import currentOfferProp from "../../store/data-props/currentOffers.prop";
import offersProp from "../../store/data-props/offers.prop";

const CurrentOfferMap = ({offers, currentOffer}) => {
  const [hotel] = useState(currentOffer);

  useEffect(() => {
    if (hotel !== currentOffer) {
      const city = [currentOffer.city.location.latitude, currentOffer.city.location.longitude];

      const zoom = 12;

      const icon = L.icon({
        iconUrl: PIN_URL,
        iconSize: PIN_SIZES,
      });

      const iconOptions = {
        iconUrl: PIN_ACTIVE_URL,
        iconSize: PIN_SIZES,
      };

      const customIcon = L.icon(iconOptions);

      const markerOptions = {
        icon: customIcon
      };

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

      offers.slice(0, RENDERED_PINS).map((offer) => {
        L.marker([offer.location.latitude, offer.location.longitude], {icon}).addTo(map);
      });

      const marker = L.marker([currentOffer.location.latitude, currentOffer.location.longitude], markerOptions);

      marker.addTo(map);

      return () => {
        if (map !== undefined) {
          map.remove();
        }
      };
    }

    return () => {};
  });

  return (
    <div
      id="map"
    ></div>
  );
};

CurrentOfferMap.propTypes = {
  offers: offersProp,
  currentOffer: currentOfferProp,
};

export default CurrentOfferMap;
