import React from "react";
import renderer from "react-test-renderer";
import ReviewItems from "./review-items";
import {MOCK_REVIEWS} from "../../test-data";

it(`Should ReviewList render correctly`, () => {
  const ReviewItemsComponent = renderer
    .create(
        <ReviewItems
          reviews={MOCK_REVIEWS}
        />)
    .toJSON();

  expect(ReviewItemsComponent).toMatchSnapshot();
});
