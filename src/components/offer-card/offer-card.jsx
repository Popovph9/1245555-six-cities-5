import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {getRating} from "../../utils";
import {STAR_WIDTH} from "../../const";

class OfferCard extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {offersMocks, onHover, onCardClick} = this.props;

    return (
      <React.Fragment>
        {offersMocks.map((offer, i) => (
          <article
            key={`${i}`}
            className="cities__place-card place-card"
            onMouseEnter={() => onHover(offer)}
            onClick={onCardClick}
          >
            {offer.isPremium ?
              <div className="place-card__mark">
                <span>Premium</span>
              </div> : ``}
            <div className="cities__image-wrapper place-card__image-wrapper">
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
  offersMocks: PropTypes.arrayOf(PropTypes.shape({
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
  })).isRequired,
  onHover: PropTypes.func.isRequired,
  onCardClick: PropTypes.func.isRequired,
};

export default OfferCard;
