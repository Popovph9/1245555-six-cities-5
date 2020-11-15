import {loadOffers, loadReviews, loadNearOffers, requireAuthorization, getFavorites, redirectToRoute} from "./action";
import {adaptOfferToClient, adaptReviewToClient} from "../utils";
import {AuthorizationStatus} from "../const";

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
  .then((data) => data.data.map((it) => adaptOfferToClient(it)))
  .then((data) => dispatch(loadOffers(data)))
);

export const fetchFavoriteOffersList = () => (dispatch, _getState, api) => (
  api.get(`/favorite`)
  .then((data) => data.data.map((it) => adaptOfferToClient(it)))
  .then((data) => dispatch(getFavorites(data)))
);

export const fetchReviewsList = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
  .then((data) => data.data.map((it) => adaptReviewToClient(it)))
  .then((data) => dispatch(loadReviews(data)))
);

export const fetchNearOffersList = (id) => (dispatch, _getState, api) => (
  api.get(`/hotels/${id}/nearby`)
  .then((data) => data.data.map((it) => adaptOfferToClient(it)))
  .then((data) => dispatch(loadNearOffers(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {
      dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
    })
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(`/`)))
);
