import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {OfferCard} from "./offer-card";
import {CITIES_SUBCLASS, PLACES_SUBCLASS, AuthorizationStatus} from "../../const";
import {MOCK_OFFERS, MOCK_CURRENT_OFFER} from "../../test-data";

configure({adapter: new Adapter()});

it(`Hover and blur on offer card should calls proper function`, () => {
  const onCardClick = jest.fn();
  const setActivePinAction = jest.fn();
  const resetActivePinAction = jest.fn();
  const refreshOfferList = jest.fn();
  const refreshNearOffersList = jest.fn();
  const changeFavoriteAction = jest.fn();
  const getCurrentOfferAction = jest.fn();
  const redirectToRouteAction = jest.fn();

  const wrapper = shallow(<OfferCard
    className={CITIES_SUBCLASS}
    offers={MOCK_OFFERS}
    onCardClick={onCardClick}
    setActivePinAction={setActivePinAction}
    resetActivePinAction={resetActivePinAction}
    refreshOfferList={refreshOfferList}
    currentOfferId={MOCK_CURRENT_OFFER.id}
    authorizationStatus={AuthorizationStatus.NO_AUTH}
    refreshNearOffersList={refreshNearOffersList}
    changeFavoriteAction={changeFavoriteAction}
    getCurrentOfferAction={getCurrentOfferAction}
    redirectToRouteAction={redirectToRouteAction}
  >
  </OfferCard>);

  wrapper.find(`article`).at(0).simulate(`mouseenter`);
  expect(setActivePinAction).toHaveBeenCalledTimes(1);

  wrapper.find(`article`).at(0).simulate(`mouseleave`);
  expect(resetActivePinAction).toHaveBeenCalledTimes(1);
});

it(`Click on offer card title should calls proper function with the main page class`, () => {
  const onCardClick = jest.fn();
  const setActivePinAction = jest.fn();
  const resetActivePinAction = jest.fn();
  const refreshOfferList = jest.fn();
  const refreshNearOffersList = jest.fn();
  const changeFavoriteAction = jest.fn();
  const getCurrentOfferAction = jest.fn();
  const redirectToRouteAction = jest.fn();

  const wrapper = shallow(<OfferCard
    className={CITIES_SUBCLASS}
    offers={MOCK_OFFERS}
    onCardClick={onCardClick}
    setActivePinAction={setActivePinAction}
    resetActivePinAction={resetActivePinAction}
    refreshOfferList={refreshOfferList}
    currentOfferId={MOCK_CURRENT_OFFER.id}
    authorizationStatus={AuthorizationStatus.NO_AUTH}
    refreshNearOffersList={refreshNearOffersList}
    changeFavoriteAction={changeFavoriteAction}
    getCurrentOfferAction={getCurrentOfferAction}
    redirectToRouteAction={redirectToRouteAction}
  >
  </OfferCard>);

  wrapper.find(`h2`).at(0).simulate(`mousedown`);
  expect(getCurrentOfferAction).toHaveBeenCalledTimes(1);

  wrapper.find(`h2`).at(0).simulate(`mouseup`);
  expect(onCardClick).toHaveBeenCalledTimes(1);
});

it(`Click on offer card title should calls proper function with the secondary page class`, () => {
  const onCardClick = jest.fn();
  const setActivePinAction = jest.fn();
  const resetActivePinAction = jest.fn();
  const refreshOfferList = jest.fn();
  const refreshNearOffersList = jest.fn();
  const changeFavoriteAction = jest.fn();
  const getCurrentOfferAction = jest.fn();
  const redirectToRouteAction = jest.fn();

  const wrapper = shallow(<OfferCard
    className={PLACES_SUBCLASS}
    offers={MOCK_OFFERS}
    onCardClick={onCardClick}
    setActivePinAction={setActivePinAction}
    resetActivePinAction={resetActivePinAction}
    refreshOfferList={refreshOfferList}
    currentOfferId={MOCK_CURRENT_OFFER.id}
    authorizationStatus={AuthorizationStatus.NO_AUTH}
    refreshNearOffersList={refreshNearOffersList}
    changeFavoriteAction={changeFavoriteAction}
    getCurrentOfferAction={getCurrentOfferAction}
    redirectToRouteAction={redirectToRouteAction}
  >
  </OfferCard>);

  wrapper.find(`h2`).at(0).simulate(`mousedown`);
  expect(getCurrentOfferAction).toHaveBeenCalledTimes(1);

  wrapper.find(`h2`).at(0).simulate(`mouseup`);
  expect(refreshNearOffersList).toHaveBeenCalledTimes(1);
  expect(onCardClick).toHaveBeenCalledTimes(1);
});
