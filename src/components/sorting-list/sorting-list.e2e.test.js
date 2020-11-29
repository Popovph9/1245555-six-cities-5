import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SortingList from "./sorting-list";
import {MOCK_SORTING} from "../../test-data";

configure({adapter: new Adapter()});

it(`Click on list option should initiate proper function calls`, () => {
  const changeSorting = jest.fn();
  const sortOffers = jest.fn();

  const wrapper = mount(<SortingList
    currentSorting={MOCK_SORTING}
    changeSorting={changeSorting}
    sortOffers={sortOffers}
  >
  </SortingList>);

  wrapper.find(`.places__option`).at(0).simulate(`click`);
  expect(changeSorting).toHaveBeenCalledTimes(1);
  expect(sortOffers).toHaveBeenCalledTimes(1);
});
