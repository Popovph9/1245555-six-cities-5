import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import StarControl from "./star-control";
import {MOCK_GRADES} from "../../test-data";
import {RATING_GRADES, RATING_TITLES} from "../../const";

configure({adapter: new Adapter()});


it(`Simulate textarea change`, () => {
  const handleRatingChange = jest.fn();

  const formComponent = shallow(<StarControl
    grades={RATING_GRADES}
    handleRatingChange={handleRatingChange}
    stars={MOCK_GRADES[3]}
    titles={RATING_TITLES}
  >
  </StarControl>);

  formComponent.find(`input`).at(0).simulate(`change`);
  expect(handleRatingChange).toHaveBeenCalledTimes(1);
});
