import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Favorites} from "./favorites";
import {MOCK_FAVORITE_OFFERS, MOCK_USER} from "../../test-data";

configure({adapter: new Adapter()});

it(`Click on logo icon should calls proper function`, () => {
  const onLogoClick = jest.fn();
  const onCardClick = jest.fn();

  const wrapper = shallow(<Favorites
    onLogoClick={onLogoClick}
    onCardClick={onCardClick}
    currentUser={MOCK_USER}
    offers={MOCK_FAVORITE_OFFERS}
  >
  </Favorites>);

  wrapper.find(`a`).at(0).simulate(`click`);
  expect(onLogoClick).toHaveBeenCalledTimes(1);

  wrapper.find(`.footer__logo-link`).simulate(`click`);
  expect(onLogoClick).toHaveBeenCalledTimes(2);
});
