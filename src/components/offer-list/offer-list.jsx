import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card";
import offersProp from "../../mocks/offers.prop";

class OfferList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = null;
  }

  render() {
    const {offersMocks, onCardClick} = this.props;
    const onHover = (value) => {
      this.setState(value);
    };

    return (
      <div className="cities__places-list places__list tabs__content">
        <OfferCard
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
};

export default OfferList;
