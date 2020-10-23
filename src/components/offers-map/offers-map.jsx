import React, {PureComponent} from "react";
import L from "leaflet";
import 'leaflet/dist/leaflet.css';
import PropTypes from "prop-types";
import {PIN_URL, PIN_ACTIVE_URL, PIN_SIZES} from "../../const";
import offersProp from "../../mocks/offers.prop";
import currentOfferProp from "../offer-screen/offer-screen.prop";

class OffersMap extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      city: [],
    };

    this.map = null;
  }

  componentDidMount() {
    const {coords} = this.props;

    this.setState({
      city: coords,
    });
  }

  componentWillUnmount() {
    this.map.remove();
    this.map = null;
  }

  componentDidUpdate() {
    const {offersMocks, currentOffer} = this.props;

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

    offersMocks.slice(0, 3).map((offer) => {
      L.marker(offer.coords, {icon}).addTo(this.map);
    });

    const marker = L.marker(currentOffer.coords, markerOptions);

    marker.addTo(this.map);
  }

  render() {
    return (
      <div id="map"></div>
    );
  }
}

OffersMap.propTypes = {
  coords: PropTypes.arrayOf(PropTypes.number).isRequired,
  offersMocks: offersProp,
  currentOffer: currentOfferProp,
};

export default OffersMap;
