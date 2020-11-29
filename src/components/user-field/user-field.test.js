import React from "react";
import renderer from "react-test-renderer";
import UserField from "./user-field";
import {MOCK_USER} from "../../test-data";
import {AuthorizationStatus} from "../../const";
import {noop} from "../../utils";

describe(`Should UserField render correctly`, () => {
  let UserFieldComponent = null;

  it(`Should UserField render correctly when the user is unauthorized`, () => {

    UserFieldComponent = renderer.create(
        <UserField
          onEmailClick={noop}
          currentEmail={``}
          getFavorites={noop}
          authorizationStatus={AuthorizationStatus.NO_AUTH}
        >
        </UserField>
    ).toJSON();

    expect(UserFieldComponent).toMatchSnapshot();
  });

  it(`Should UserField render correctly when the user is logged-in`, () => {

    UserFieldComponent = renderer.create(
        <UserField
          onEmailClick={noop}
          currentEmail={MOCK_USER.email}
          getFavorites={noop}
          authorizationStatus={AuthorizationStatus.AUTH}
        >
        </UserField>
    ).toJSON();

    expect(UserFieldComponent).toMatchSnapshot();
  });
});
