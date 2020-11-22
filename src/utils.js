import moment from "moment";
import {DEFAULT_SORTING, HIGHT_PRICE_SORTING, LOW_PRICE_SORTING, RATING_SORTING, AuthorizationStatus} from "./const";

export const getRating = (rating, width) => {
  return Math.round(rating * width);
};

export const getReviewFormatDate = (date) => {
  return moment(date).format(`MMMM YYYY`);
};

export const getReviewDate = (date) => {
  return moment(date).format(`YYYY-MM-DD`);
};

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const sortByHighPrice = (offerA, offerB) => {
  return offerB.price - offerA.price;
};

export const sortByLowPrice = (offerA, offerB) => {
  return offerA.price - offerB.price;
};

export const sortByRating = (offerA, offerB) => {
  return offerB.rating - offerA.rating;
};

export const sortByDate = (reviewA, reviewB) => {
  return moment(reviewB.date) - moment(reviewA.date);
};

export const adaptOfferToClient = (data) => {
  const adaptedOffer = Object.assign(
      {},
      data,
      {
        picture: data.preview_image,
        photos: data.images,
        headline: data.title,
        isFavorite: data.is_favorite,
        isPremium: data.is_premium,
        guests: data.max_adults,
        offers: data.goods,
        host: Object.assign(
            {},
            data.host,
            {
              avatar: data.host.avatar_url,
              isSuper: data.host.is_pro,
            }),
      }
  );

  delete adaptedOffer.preview_image;
  delete adaptedOffer.images;
  delete adaptedOffer.title;
  delete adaptedOffer.is_favorite;
  delete adaptedOffer.is_premium;
  delete adaptedOffer.max_adults;
  delete adaptedOffer.host.avatar_url;
  delete adaptedOffer.host.is_pro;
  delete adaptedOffer.goods;

  return adaptedOffer;
};

export const adaptUserInfoToClient = (data) => {
  const adaptedInfo = Object.assign(
      {},
      data,
      {
        authorAvatar: data.avatar_url,
        isSuper: data.is_pro,
      }
  );

  delete adaptedInfo.avatar_url;
  delete adaptedInfo.is_pro;

  return adaptedInfo;
};

export const adaptReviewToClient = (data) => {
  const adaptedReview = Object.assign(
      {},
      data,
      {
        user: Object.assign(
            {},
            data.user,
            {
              authorAvatar: data.user.avatar_url,
              isSuper: data.user.is_pro,
            }),
      }
  );

  delete adaptedReview.user.avatar_url;
  delete adaptedReview.user.is_pro;

  return adaptedReview;
};

export const switchSorting = (state, action) => {
  switch (action.payload) {
    case DEFAULT_SORTING:
      return extend(state, {
        offers: state.allOffers.filter((it) => it.city.name === state.city)
      });
    case HIGHT_PRICE_SORTING:
      return extend(state, {
        offers: state.allOffers.filter((it) => it.city.name === state.city).sort(sortByHighPrice)
      });
    case LOW_PRICE_SORTING:
      return extend(state, {
        offers: state.allOffers.filter((it) => it.city.name === state.city).sort(sortByLowPrice)
      });
    case RATING_SORTING:
      return extend(state, {
        offers: state.allOffers.filter((it) => it.city.name === state.city).sort(sortByRating)
      });
    default:
      return extend(state, {
        offers: state.allOffers.filter((it) => it.city.name === state.city)
      });
  }
};


export const getAction = (authorizationStatus, redirectToRoute, changeFavoriteAction, offer) => {
  switch (authorizationStatus) {
    case AuthorizationStatus.NO_AUTH:
      return (
        () => {
          redirectToRoute(`/login`);
        }
      );
    case AuthorizationStatus.AUTH:
      return (
        () => {
          changeFavoriteAction({
            id: offer.id,
            status: Number(!offer.isFavorite)
          });
        }
      );
    default:
      return (
        () => {
          redirectToRoute(`/login`);
        }
      );
  }
};
