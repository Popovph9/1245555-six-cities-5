import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import offersProp from "../../mocks/offers.prop";
import CitiesOfferCard from "../cities-offer-card/cities-offer-card";

class OfferList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = null;
  }

  render() {
    const {offersMocks, onCardClick, className} = this.props;
    const onHover = (value) => {
      this.setState(value);
    };

    return (
      <div className={`${className} places__list `}>
        <CitiesOfferCard
          offersMocks = {offersMocks}
          onHover = {onHover}
          onCardClick = {onCardClick}
        />
      </div>
    );
  }
}

OfferList.propTypes = {
  offersMocks: offersProp,
  onCardClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

export default OfferList;
