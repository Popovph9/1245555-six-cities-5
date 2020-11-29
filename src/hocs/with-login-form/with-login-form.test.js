import React from "react";
import renderer from "react-test-renderer";
import withLoginForm from "./with-login-form";
import {noop} from "../../utils";
import {MOCK_CITY, MOCK_NO_USER} from "../../test-data";
import {AuthorizationStatus} from "../../const";

const MockComponent = React.forwardRef(() => {
  return (
    <div></div>
  );
});
MockComponent.displayName = `MockComponent`;

const MockComponentWrapped = withLoginForm(MockComponent);

it(`withLoginForm is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped
      city={MOCK_CITY}
      onLogoClick={noop}
      getFavorites={noop}
      authorizationStatus={AuthorizationStatus.NO_AUTH}
      currentUser={MOCK_NO_USER}
      handleSubmit={noop}
      onSubmit={noop}
    >
    </MockComponentWrapped>
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
