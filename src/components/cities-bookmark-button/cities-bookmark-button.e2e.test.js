import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CitiesBookmarkButton from "./cities-bookmark-button";
import {AuthorizationStatus} from "../../const";
import {MOCK_CURRENT_OFFER} from "../../test-data";

configure({adapter: new Adapter()});

it(`Click on offer card bookmark button should calls proper function when the user is unauthorized`, () => {
  const redirectToRoute = jest.fn();
  const refreshOfferList = jest.fn();
  const changeFavoriteAction = jest.fn();

  const wrapper = shallow(<CitiesBookmarkButton
    offer={MOCK_CURRENT_OFFER}
    authorizationStatus={AuthorizationStatus.NO_AUTH}
    changeFavoriteAction={changeFavoriteAction}
    refreshOfferList={refreshOfferList}
    redirectToRoute={redirectToRoute}
  >
  </CitiesBookmarkButton>);

  wrapper.find(`button`).at(0).simulate(`click`);
  expect(redirectToRoute).toHaveBeenCalledTimes(1);
});

it(`Click on offer card bookmark button should calls proper function when the user is logged in`, () => {
  const redirectToRoute = jest.fn();
  const refreshOfferList = jest.fn();
  const changeFavoriteAction = jest.fn();

  const wrapper = shallow(<CitiesBookmarkButton
    offer={MOCK_CURRENT_OFFER}
    authorizationStatus={AuthorizationStatus.AUTH}
    changeFavoriteAction={changeFavoriteAction}
    refreshOfferList={refreshOfferList}
    redirectToRoute={redirectToRoute}
  >
  </CitiesBookmarkButton>);

  wrapper.find(`button`).at(0).simulate(`click`);
  expect(changeFavoriteAction).toHaveBeenCalledTimes(1);
  expect(refreshOfferList).toHaveBeenCalledTimes(1);
});
