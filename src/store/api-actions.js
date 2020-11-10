import {loadOffers, loadReviews, loadNearOffers} from "./action";
import {adaptOfferToClient, adaptReviewToClient} from "../utils";

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
  .then((data) => data.data.map((it) => adaptOfferToClient(it)))
  .then((data) => dispatch(loadOffers(data)))
);

export const fetchReviewsList = (id) => (dispatch, _getState, api) => (
  api.get(`comments/${id}`)
  .then((data) => data.data.map((it) => adaptReviewToClient(it)))
  .then((data) => dispatch(loadReviews(data)))
);

export const fetchNearOffersList = (id) => (dispatch, _getState, api) => (
  api.get(`/hotels/${id}/nearby`)
  .then((data) => data.data.map((it) => adaptOfferToClient(it)))
  .then((data) => dispatch(loadNearOffers(data)))
);
