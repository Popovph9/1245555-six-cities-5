import React from "react";
import renderer from "react-test-renderer";
import SortingList from "./sorting-list";
import {MOCK_SORTING} from "../../test-data";
import {AuthorizationStatus} from "../../const";
import {noop} from "../../utils";

describe(`Should SortingList render correctly`, () => {
  it(`Should SortingList render correctly with default sorting type`, () => {
    const tree = renderer
    .create(
        <SortingList
          currentSorting={MOCK_SORTING}
          changeSorting={noop}
          sortOffers={noop}
          authorizationStatus={AuthorizationStatus.NO_AUTH}
        />)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
