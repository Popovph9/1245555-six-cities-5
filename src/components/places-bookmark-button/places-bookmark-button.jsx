import React from "react";
import PropTypes from "prop-types";
import currentOfferProp from "../../store/data-props/currentOffers.prop";
import {AuthorizationStatus, AppRoute} from "../../const";

const PlacesBookmarkButton = ({
  offer,
  authorizationStatus,
  changeFavoriteAction,
  refreshOfferList,
  redirectToRoute,
  currentOfferId,
  refreshNearOffersList,
}) => {

  return (
    <button
      className={offer.isFavorite ? `place-card__bookmark-button--active button` : `place-card__bookmark-button button`}
      type="button"
      onClick={authorizationStatus === AuthorizationStatus.NO_AUTH ?
        () => {
          redirectToRoute(AppRoute.SIGN_IN);
        } :
        () => {
          changeFavoriteAction({
            id: offer.id,
            status: Number(!offer.isFavorite)
          });
          refreshOfferList();
          refreshNearOffersList(currentOfferId);
        }
      }
    >
      <svg className="place-card__bookmark-icon" width="18" height="19">
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
};

PlacesBookmarkButton.propTypes = {
  offer: currentOfferProp,
  currentOfferId: PropTypes.number,
  authorizationStatus: PropTypes.string.isRequired,
  changeFavoriteAction: PropTypes.func.isRequired,
  refreshOfferList: PropTypes.func.isRequired,
  redirectToRoute: PropTypes.func.isRequired,
  refreshNearOffersList: PropTypes.func,
};

export default PlacesBookmarkButton;
