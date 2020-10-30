import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import PropTypes from "prop-types";
import {getRating} from "../../utils";
import {STAR_WIDTH} from "../../const";
import offersProp from "../../mocks/offers.prop";


class OfferCard extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {className, offers, onHover, onCardClick, setActivePin, resetActivePin} = this.props;

    return (
      <React.Fragment>
        {offers.map((offer, i) => (
          <article
            key={`${i}`}
            className={`${className}__place-card place-card`}
            onMouseEnter={() => {
              onHover(offer);
              setActivePin(offer);
            }}
            onMouseLeave={resetActivePin}
            onClick={onCardClick}
          >
            {offer.isPremium ?
              <div className="place-card__mark">
                <span>Premium</span>
              </div> : ``}
            <div className={`${className}__image-wrapper place-card__image-wrapper`}>
              <a href="#">
                <img className="place-card__image" src={offer.picture} width="260" height="200" alt="Place image"/>
              </a>
            </div>
            <div className="place-card__info">
              <div className="place-card__price-wrapper">
                <div className="place-card__price">
                  <b className="place-card__price-value">&euro;{offer.price}</b>
                  <span className="place-card__price-text">&#47;&nbsp;night</span>
                </div>
                <button className="place-card__bookmark-button button" type="button">
                  <svg className="place-card__bookmark-icon" width="18" height="19">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="place-card__rating rating">
                <div className="place-card__stars rating__stars">
                  <span style={{width: `${getRating(offer.rating, STAR_WIDTH)}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
              </div>
              <h2 className="place-card__name">
                <a href="#">{offer.headline}</a>
              </h2>
              <p className="place-card__type">{offer.type}</p>
            </div>
          </article>
        ))}
      </React.Fragment>
    );
  }
}

OfferCard.propTypes = {
  className: PropTypes.string.isRequired,
  offers: offersProp,
  onHover: PropTypes.func.isRequired,
  onCardClick: PropTypes.func.isRequired,
  setActivePin: PropTypes.func.isRequired,
  resetActivePin: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setActivePin(offer) {
    dispatch(ActionCreator.setActivePin(offer));
  },
  resetActivePin() {
    dispatch(ActionCreator.resetActivePin());
  },
});

export {OfferCard};
export default connect(null, mapDispatchToProps)(OfferCard);
