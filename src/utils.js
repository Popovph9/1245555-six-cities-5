import moment from "moment";

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

  return adaptedOffer;
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
