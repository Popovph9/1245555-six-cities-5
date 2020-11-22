import PropTypes from "prop-types";

export default PropTypes.arrayOf(PropTypes.shape({
  city: PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  rating: PropTypes.number.isRequired,
  host: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isSuper: PropTypes.bool.isRequired,
  }).isRequired,
  description: PropTypes.string.isRequired,
  location: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    zoom: PropTypes.number.isRequired,
  }).isRequired,
  id: PropTypes.number.isRequired,
  picture: PropTypes.string.isRequired,
  photos: PropTypes.arrayOf(PropTypes.string).isRequired,
  headline: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  isPremium: PropTypes.bool.isRequired,
  guests: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(PropTypes.string).isRequired,
})).isRequired;
