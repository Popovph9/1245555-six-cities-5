import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {OfferReviewForm} from "./offer-review-form";
import {MOCK_GRADES} from "../../test-data";

configure({adapter: new Adapter()});

it(`Simulate form submit`, () => {
  const handleFieldChange = jest.fn();
  const handleRatingChange = jest.fn();
  const handleSubmit = jest.fn();

  const formComponent = shallow(<OfferReviewForm
    handleSubmit={handleSubmit}
    handleFieldChange={handleFieldChange}
    handleRatingChange={handleRatingChange}
    isDisabled={false}
    stars={MOCK_GRADES[0]}
    ref={{
      commentRef: React.createRef(),
    }}
  >
  </OfferReviewForm>);

  formComponent.find(`button`).at(0).simulate(`click`);
  expect(handleSubmit).toHaveBeenCalledTimes(1);
});

it(`Simulate textarea change`, () => {
  const handleFieldChange = jest.fn();
  const handleRatingChange = jest.fn();
  const handleSubmit = jest.fn();

  const formComponent = shallow(<OfferReviewForm
    handleSubmit={handleSubmit}
    handleFieldChange={handleFieldChange}
    handleRatingChange={handleRatingChange}
    isDisabled={false}
    stars={MOCK_GRADES[0]}
    ref={{
      commentRef: React.createRef(),
    }}
  >
  </OfferReviewForm>);

  formComponent.find(`textarea`).at(0).simulate(`change`);
  expect(handleFieldChange).toHaveBeenCalledTimes(1);
});
