import React, {PureComponent} from "react";
import L from "leaflet";
import 'leaflet/dist/leaflet.css';
import currentOfferProp from "../../store/data-props/currentOffers.prop";
import offersProp from "../../store/data-props/offers.prop";
import {PIN_URL, PIN_ACTIVE_URL, PIN_SIZES, RENDERED_PINS} from "../../const";

const withInactivePin = (Component) => {
  class WithInactivePin extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        city: [],
      };

      this.map = null;
    }

    componentDidMount() {
      const {currentOffer} = this.props;

      this.setState({
        city: [currentOffer.city.location.latitude, currentOffer.city.location.longitude],
      });
    }

    componentWillUnmount() {
      this.map.remove();
      this.map = null;

      this.setState({
        city: [],
      });
    }

    componentDidUpdate() {
      const {offers, currentOffer} = this.props;

      if (this.map !== null) {
        this.map.remove();
        this.map = null;
      }

      const city = this.state.city;

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

      offers.slice(0, RENDERED_PINS).map((offer) => {
        L.marker([offer.location.latitude, offer.location.longitude], {icon}).addTo(this.map);
      });

      const marker = L.marker([currentOffer.location.latitude, currentOffer.location.longitude], markerOptions);

      marker.addTo(this.map);
    }

    render() {
      return (
        <Component
          {...this.props}
        />
      );
    }
  }

  WithInactivePin.propTypes = {
    offers: offersProp,
    currentOffer: currentOfferProp,
  };

  return WithInactivePin;
};

export default withInactivePin;
