import React from "react";
import renderer from "react-test-renderer";
import StarControl from "./star-control";
import {noop} from "../../utils";
import {MOCK_GRADES} from "../../test-data";
import {RATING_GRADES, RATING_TITLES} from "../../const";

it(`Should StarControl render correctly`, () => {

  const StarControlComponent = renderer
    .create(
        <StarControl
          grades={RATING_GRADES}
          handleRatingChange={noop}
          stars={MOCK_GRADES[3]}
          titles={RATING_TITLES}
        />)
    .toJSON();

  expect(StarControlComponent).toMatchSnapshot();
});
