import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";
import withActivePin from "./with-active-pin";
import {MOCK_OFFERS} from "../../test-data";

configure({adapter: new Adapter()});

const MockComponent = () => {
  return (
    <div id="map"></div>
  );
};

const MockComponentWrapped = withActivePin(MockComponent);

it(`withActivePin is rendered correctly`, () => {
  const tree = renderer.create(shallow(
      <MockComponentWrapped
        offers={MOCK_OFFERS}
        activePin={null}
      >
      </MockComponentWrapped>
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
