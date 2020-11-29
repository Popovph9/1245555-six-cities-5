import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PropertyBookmarkButton from "./property-bookmark-button";
import {AuthorizationStatus} from "../../const";
import {MOCK_CURRENT_OFFER} from "../../test-data";

configure({adapter: new Adapter()});

it(`Click on bookmark button in property page should calls proper function when the user is unauthorized`, () => {
  const redirectToRoute = jest.fn();
  const refreshOfferList = jest.fn();
  const changeFavorites = jest.fn();

  const wrapper = shallow(<PropertyBookmarkButton
    currentOffer={MOCK_CURRENT_OFFER}
    authorizationStatus={AuthorizationStatus.NO_AUTH}
    changeFavorites={changeFavorites}
    refreshOfferList={refreshOfferList}
    redirectToRoute={redirectToRoute}
  >
  </PropertyBookmarkButton>);

  wrapper.find(`button`).at(0).simulate(`click`);
  expect(redirectToRoute).toHaveBeenCalledTimes(1);
});

it(`Click on bookmark button in property page should calls proper functions when the user is logged in`, () => {
  const redirectToRoute = jest.fn();
  const refreshOfferList = jest.fn();
  const changeFavorites = jest.fn();

  const wrapper = shallow(<PropertyBookmarkButton
    currentOffer={MOCK_CURRENT_OFFER}
    authorizationStatus={AuthorizationStatus.AUTH}
    changeFavorites={changeFavorites}
    refreshOfferList={refreshOfferList}
    redirectToRoute={redirectToRoute}
  >
  </PropertyBookmarkButton>);

  wrapper.find(`button`).at(0).simulate(`click`);
  expect(changeFavorites).toHaveBeenCalledTimes(1);
  expect(refreshOfferList).toHaveBeenCalledTimes(1);
});
