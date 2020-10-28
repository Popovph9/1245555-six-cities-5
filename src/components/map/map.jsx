
import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import L from "leaflet";
import 'leaflet/dist/leaflet.css';
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
    const {offers} = this.props;

    this.setState({
      city: [offers[0].city.location.latitude, offers[0].city.location.longitude],
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
    const {offers, activePin} = this.props;

    if (this.map !== null) {
      this.map.remove();
      this.map = null;
    }

    const city = [offers[0].city.location.latitude, offers[0].city.location.longitude];

    const zoom = offers[0].city.location.zoom;

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

    offers.map((offer) => {
      L.marker(offer.coords, {icon}).addTo(this.map).on(`mouseover`, (evt) => {
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
      <div id="map"></div>
    );
  }
}

Map.propTypes = {
  offers: offersProp,
  activePin: PropTypes.array
};

export default Map;
