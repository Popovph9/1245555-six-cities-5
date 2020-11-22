import React from "react";
import PropTypes from "prop-types";
import {AuthorizationStatus, AppRoute} from "../../const";

const PropertyBookmarkButton = ({currentOffer, authorizationStatus, changeFavorites, refreshOfferList, redirectToRoute}) => {
  return (
    <button
      onClick={authorizationStatus === AuthorizationStatus.NO_AUTH ?
        () => {
          redirectToRoute(AppRoute.SIGN_IN);
        } :
        () => {
          changeFavorites({
            id: currentOffer.id,
            status: Number(!currentOffer.isFavorite)
          });
          refreshOfferList();
        }
      }
      className={`${currentOffer.isFavorite ? `property__bookmark-button property__bookmark-button--active button` : `property__bookmark-button button`}`}
      type="button"
    >
      <svg className="property__bookmark-icon" width="31" height="33">
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
};

PropertyBookmarkButton.propTypes = {
  currentOffer: PropTypes.object.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  changeFavorites: PropTypes.func,
  refreshOfferList: PropTypes.func,
  redirectToRoute: PropTypes.func.isRequired,
};

export default PropertyBookmarkButton;
