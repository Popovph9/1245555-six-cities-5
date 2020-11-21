import PropTypes from "prop-types";

export default PropTypes.shape({
  id: PropTypes.number,
  email: PropTypes.string,
  name: PropTypes.string,
  authorAvatar: PropTypes.string,
  isSuper: PropTypes.bool,
}).isRequired;
