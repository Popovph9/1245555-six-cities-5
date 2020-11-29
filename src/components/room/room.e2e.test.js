import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Room} from "./room";
import {AuthorizationStatus} from "../../const";
import {
  MOCK_NO_USER,
  MOCK_CURRENT_OFFER,
  MOCK_REVIEWS,
  MOCK_OFFERS} from "../../test-data";
import {noop} from "../../utils";

configure({adapter: new Adapter()});

it(`Click on logo icon should call proper function`, () => {
  const onLogoClick = jest.fn();

  const wrapper = shallow(<Room
    id={MOCK_CURRENT_OFFER.id}
    onEmailClick={noop}
    getFavorites={noop}
    onLogoClick={onLogoClick}
    onCardClick={noop}
    loadOfferData={noop}
    refreshOfferList={noop}
    refreshNearOffersList={noop}
    currentOffer={MOCK_CURRENT_OFFER}
    reviews={MOCK_REVIEWS}
    nearOffers={MOCK_OFFERS}
    changeFavoriteAction={noop}
    redirectToRouteAction={noop}
    authorizationStatus={AuthorizationStatus.NO_AUTH}
    currentUser={MOCK_NO_USER}
  >
  </Room>);

  wrapper.find(`.header__logo-link`).simulate(`click`);
  expect(onLogoClick).toHaveBeenCalledTimes(1);
});
