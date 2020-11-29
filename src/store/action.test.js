import {
  ActionType,
  setActivePin,
  resetActivePin,
  getCurrentOffer,
  getOffers,
  loadCurrentOffer,
  loadOffers,
  loadReviews,
  getFavorites,
  loadNearOffers,
  requireAuthorization,
  changeUser,
  redirectToRoute} from "./action";
import {MOCK_CURRENT_OFFER, MOCK_OFFERS, MOCK_REVIEWS, MOCK_FAVORITE_OFFERS, MOCK_USER} from "../test-data";
import {AuthorizationStatus, AppRoute} from "../const";

describe(`Action creators work correctly`, () => {
  it(`Action creator for set active pin returns correct action`, () => {

    expect(setActivePin(MOCK_CURRENT_OFFER)).toEqual({
      type: ActionType.SET_ACTIVE_PIN,
      payload: [MOCK_CURRENT_OFFER.location.latitude, MOCK_CURRENT_OFFER.location.longitude],
    });
  });

  it(`Action creator for reset active Pin returns correct action`, () => {

    expect(resetActivePin()).toEqual({
      type: ActionType.RESET_ACTIVE_PIN,
    });
  });

  it(`Action creator for get current offer returns correct action`, () => {

    expect(getCurrentOffer(MOCK_CURRENT_OFFER)).toEqual({
      type: ActionType.GET_CURRENT_OFFER,
      payload: MOCK_CURRENT_OFFER,
    });
  });

  it(`Action creator for get offers returns correct action`, () => {

    expect(getOffers()).toEqual({
      type: ActionType.GET_OFFERS,
    });
  });

  it(`Action creator for load current offer returns correct action`, () => {

    expect(loadCurrentOffer(MOCK_CURRENT_OFFER)).toEqual({
      type: ActionType.LOAD_CURRENT_OFFER,
      payload: MOCK_CURRENT_OFFER,
    });
  });

  it(`Action creator for load offers returns correct action`, () => {

    expect(loadOffers(MOCK_OFFERS)).toEqual({
      type: ActionType.LOAD_OFFERS,
      payload: MOCK_OFFERS,
    });
  });

  it(`Action creator for load reviews returns correct action`, () => {

    expect(loadReviews(MOCK_REVIEWS)).toEqual({
      type: ActionType.LOAD_REVIEWS,
      payload: MOCK_REVIEWS,
    });
  });

  it(`Action creator for get favorites returns correct action`, () => {

    expect(getFavorites(MOCK_FAVORITE_OFFERS)).toEqual({
      type: ActionType.GET_FAVORITES,
      payload: MOCK_FAVORITE_OFFERS,
    });
  });

  it(`Action creator for load near offers returns correct action`, () => {

    expect(loadNearOffers(MOCK_OFFERS)).toEqual({
      type: ActionType.LOAD_NEAR_OFFERS,
      payload: MOCK_OFFERS,
    });
  });

  it(`Action creator for require authorization returns correct action`, () => {

    expect(requireAuthorization(AuthorizationStatus.NO_AUTH)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.NO_AUTH,
    });
  });

  it(`Action creator for change user returns correct action`, () => {

    expect(changeUser(MOCK_USER)).toEqual({
      type: ActionType.CHANGE_USER,
      payload: MOCK_USER,
    });
  });

  it(`Action creator for redirect to route returns correct action`, () => {

    expect(redirectToRoute(AppRoute)).toEqual({
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: AppRoute,
    });
  });
});
