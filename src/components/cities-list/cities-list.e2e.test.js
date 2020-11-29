import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CitiesList from "./cities-list";

configure({adapter: new Adapter()});

it(`Click on list item should initiate proper function calls`, () => {
  const getCity = jest.fn();
  const getOffers = jest.fn();

  const wrapper = shallow(<CitiesList
    getCity={getCity}
    getOffers={getOffers}
  >
  </CitiesList>);

  wrapper.find(`.locations__item-link`).at(0).simulate(`click`);
  wrapper.find(`span`).at(0).simulate(`click`);
  expect(getOffers).toHaveBeenCalledTimes(1);
  expect(getCity).toHaveBeenCalledTimes(1);
});
