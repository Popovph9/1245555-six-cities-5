import PropTypes from "prop-types";

export default PropTypes.arrayOf(PropTypes.shape({
  id: PropTypes.number,
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    authorAvatar: PropTypes.string,
    isSuper: PropTypes.bool,
  }),
  rating: PropTypes.number,
  comment: PropTypes.string,
  date: PropTypes.string,
}));
