import React from "react";
import renderer from "react-test-renderer";
import ReviewList from "./review-list";
import {MOCK_REVIEWS} from "../../test-data";

it(`Should ReviewList render correctly`, () => {
  const ReviewListComponent = renderer
    .create(
        <ReviewList
          reviews={MOCK_REVIEWS}
        />)
    .toJSON();

  expect(ReviewListComponent).toMatchSnapshot();
});
