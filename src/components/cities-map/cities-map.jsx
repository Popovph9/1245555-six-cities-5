import React, {PureComponent} from "react";
import L from "leaflet";
import 'leaflet/dist/leaflet.css';
import withMap from "../hocs/with-map";
import {PIN_URL, PIN_ACTIVE_URL, PIN_SIZES} from "../../const";
import offersProp from "../../mocks/offers.prop";

class CitiesMap extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="map"></div>
    );
  }

  componentDidUpdate() {
    const {offersMocks} = this.props;

    const icon = L.icon({
      iconUrl: PIN_URL,
      iconSize: PIN_SIZES,
    });

    offersMocks.map((offer) => {
      L.marker(offer.coords, {icon}).addTo(this.map).on(`mouseover`, (evt) => {
        evt.target._icon.src = PIN_ACTIVE_URL;
      }).on(`mouseout`, (evt) => {
        evt.target._icon.src = PIN_URL;
      });
    });
  }
}

CitiesMap.propTypes = {
  offersMocks: offersProp,
};

export default withMap(CitiesMap);
