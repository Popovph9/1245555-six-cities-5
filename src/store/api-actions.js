import {
  loadOffers,
  loadReviews,
  loadNearOffers,
  requireAuthorization,
  getFavorites,
  changeUser,
  redirectToRoute,
  getCurrentOffer} from "./action";
import {adaptOfferToClient, adaptReviewToClient, adaptUserInfoToClient} from "../utils";
import {AuthorizationStatus, APIRoute, AppRoute} from "../const";

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.HOTELS)
  .then((data) => data.data.map((it) => adaptOfferToClient(it)))
  .then((data) => dispatch(loadOffers(data)))
);

export const fetchCurrentOffer = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.HOTELS}/${id}`)
  .then((data) => adaptOfferToClient(data.data))
  .then((data) => dispatch(getCurrentOffer(data)))
);


export const fetchFavoriteOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITES)
  .then((data) => data.data.map((it) => adaptOfferToClient(it)))
  .then((data) => dispatch(getFavorites(data)))
);

export const fetchReviewsList = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.COMMENTS}/${id}`)
  .then((data) => data.data.map((it) => adaptReviewToClient(it)))
  .then((data) => dispatch(loadReviews(data)))
);

export const fetchNearOffersList = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.HOTELS}/${id}${APIRoute.NEAR}`)
  .then((data) => data.data.map((it) => adaptOfferToClient(it)))
  .then((data) => dispatch(loadNearOffers(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {
      dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
    })
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then((data) => adaptUserInfoToClient(data.data))
    .then((data) => dispatch(changeUser(data)))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => api.get(APIRoute.HOTELS)
      .then((data) => data.data.map((it) => adaptOfferToClient(it)))
        .then((data) => dispatch(loadOffers(data))))
    .then(() => dispatch(redirectToRoute(AppRoute.MAIN)))
);

export const sendReview = ({id, comment, rating}) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.COMMENTS}/${id}`, {comment, rating})
  .then((data) => data.data.map((it) => adaptReviewToClient(it)))
  .then((data) => dispatch(loadReviews(data)))
);

export const changeFavorite = ({id, status}) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.FAVORITES}/${id}/${status}`)
);

export const changeCurrentFavorite = ({id, status}) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.FAVORITES}/${id}/${status}`)
  .then((data) => adaptOfferToClient(data.data))
  .then((data) => dispatch(getCurrentOffer(data)))
);
