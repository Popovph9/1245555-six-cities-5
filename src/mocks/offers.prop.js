import PropTypes from "prop-types";

export default PropTypes.arrayOf(PropTypes.shape({
  id: PropTypes.number.isRequired,
  picture: PropTypes.string.isRequired,
  photos: PropTypes.array.isRequired,
  headline: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  bedrooms: PropTypes.number.isRequired,
  guests: PropTypes.number.isRequired,
  offers: PropTypes.array.isRequired,
  isPremium: PropTypes.bool.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  host: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isSuper: PropTypes.bool.isRequired,
  }).isRequired,
  reviews: PropTypes.arrayOf(PropTypes.shape({
    authorAvatar: PropTypes.string.isRequired,
    authorName: PropTypes.string.isRequired,
    grade: PropTypes.number.isRequired,
    date: PropTypes.object.isRequired,
    text: PropTypes.array.isRequired,
  }))
})).isRequired;
