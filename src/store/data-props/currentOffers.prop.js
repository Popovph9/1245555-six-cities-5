import PropTypes from "prop-types";

export default PropTypes.shape({
  city: PropTypes.shape({
    name: PropTypes.string,
    location: PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
      zoom: PropTypes.number,
    }),
  }),
  rating: PropTypes.number,
  host: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    avatar: PropTypes.string,
    isSuper: PropTypes.bool,
  }),
  description: PropTypes.string,
  location: PropTypes.shape({
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    zoom: PropTypes.number,
  }),
  id: PropTypes.number,
  picture: PropTypes.string,
  photos: PropTypes.arrayOf(PropTypes.string),
  headline: PropTypes.string,
  isFavorite: PropTypes.bool,
  isPremium: PropTypes.bool,
  guests: PropTypes.number,
  offers: PropTypes.arrayOf(PropTypes.string),
}).isRequired;
