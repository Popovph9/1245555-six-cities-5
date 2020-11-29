import React from "react";
import renderer from "react-test-renderer";
import withReviewForm from "./with-review-form";
import {noop} from "../../utils";
import {MOCK_CURRENT_OFFER} from "../../test-data";

const MockComponent = React.forwardRef(() => {
  return (
    <div></div>
  );
});
MockComponent.displayName = `MockComponent`;

const MockComponentWrapped = withReviewForm(MockComponent);

it(`withReviewForm is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped
      id={MOCK_CURRENT_OFFER.id}
      sendReview={noop}
    >
    </MockComponentWrapped>
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
