import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {FavoriteItem} from "./favorite-item";
import {MOCK_FAVORITE_CURRENT_OFFER} from "../../test-data";

configure({adapter: new Adapter()});

it(`Click on offer card headline should calls proper function`, () => {
  const getCurrentOfferAction = jest.fn();
  const onCardClick = jest.fn();

  const wrapper = shallow(<FavoriteItem
    offer={MOCK_FAVORITE_CURRENT_OFFER}
    onCardClick={onCardClick}
    getCurrentOfferAction={getCurrentOfferAction}
  >
  </FavoriteItem>);

  wrapper.find(`h2`).at(0).simulate(`click`);
  expect(onCardClick).toHaveBeenCalledTimes(1);
});

it(`Hover favorite offer card should calls proper function`, () => {
  const getCurrentOfferAction = jest.fn();
  const onCardClick = jest.fn();

  const wrapper = shallow(<FavoriteItem
    offer={MOCK_FAVORITE_CURRENT_OFFER}
    onCardClick={onCardClick}
    getCurrentOfferAction={getCurrentOfferAction}
  >
  </FavoriteItem>);

  wrapper.find(`article`).at(0).simulate(`mouseenter`);
  expect(getCurrentOfferAction).toHaveBeenCalledTimes(1);
});
