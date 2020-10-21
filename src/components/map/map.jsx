
import React, {PureComponent} from "react";
import L from "leaflet";
import 'leaflet/dist/leaflet.css';
import PropTypes from "prop-types";
import {PIN_URL, PIN_ACTIVE_URL, PIN_SIZES} from "../../const";
import offersProp from "../../mocks/offers.prop";

class Map extends PureComponent {
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
    const {offersMocks} = this.props;

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

    offersMocks.map((offer) => {
      L.marker(offer.coords, {icon}).addTo(this.map).on(`mouseover`, (evt) => {
        evt.target._icon.src = PIN_ACTIVE_URL;
      }).on(`mouseout`, (evt) => {
        evt.target._icon.src = PIN_URL;
      });
    });
  }

  render() {
    return (
      <div id="map"></div>
    );
  }
}

Map.propTypes = {
  coords: PropTypes.arrayOf(PropTypes.number).isRequired,
  offersMocks: offersProp,
};

export default Map;
