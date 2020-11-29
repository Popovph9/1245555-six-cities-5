import React, {PureComponent} from "react";
import L from "leaflet";
import 'leaflet/dist/leaflet.css';
import PropTypes from "prop-types";
import offersProp from "../../store/data-props/offers.prop";
import {PIN_URL, PIN_ACTIVE_URL, PIN_SIZES} from "../../const";

const TEST_KEY = 1;

const withActivePin = (Component) => {
  class WithActivePin extends PureComponent {
    constructor(props) {
      super(props);

      this.map = null;
    }

    componentWillUnmount() {
      this.map.remove();
      this.map = null;
    }

    componentDidMount() {

    }

    componentDidUpdate() {
      const {offers, activePin} = this.props;

      if (this.map !== null) {
        this.map.remove();
        this.map = null;
      }

      const city = [offers[0].city.location.latitude, offers[0].city.location.longitude];

      const zoom = offers[0].city.location.zoom;

      this.map = L.map(`map`, {
        center: city,
        zoom,
        zoomControl: false,
        marker: true
      });
      this.map.setView(city, zoom);

      L.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      }).addTo(this.map);

      const icon = L.icon({
        iconUrl: PIN_URL,
        iconSize: PIN_SIZES,
      });

      offers.map((offer) => {
        L.marker([offer.location.latitude, offer.location.longitude], {icon}).addTo(this.map).on(`mouseover`, (evt) => {
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
        marker.addTo(this.map);
      }
    }

    render() {
      return (
        <Component
          key={TEST_KEY}
          {...this.props}
        />
      );
    }
  }

  WithActivePin.propTypes = {
    offers: offersProp,
    activePin: PropTypes.arrayOf(PropTypes.number)
  };

  return WithActivePin;
};

export default withActivePin;
