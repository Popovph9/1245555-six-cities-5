import React from "react";
import renderer from "react-test-renderer";
import {SignIn} from "./sign-in";
import {noop} from "../../utils";
import {MOCK_CITY, MOCK_NO_USER} from "../../test-data";
import {AuthorizationStatus} from "../../const";

it(`Should SignIn render correctly`, () => {

  const SignInComponent = renderer
    .create(
        <SignIn
          city={MOCK_CITY}
          onLogoClick={noop}
          getFavorites={noop}
          authorizationStatus={AuthorizationStatus.NO_AUTH}
          currentUser={MOCK_NO_USER}
          handleSubmit={noop}
          onSubmit={noop}
          ref={{
            loginRef: React.createRef(),
            passwordRef: React.createRef(),
          }}
        />)
    .toJSON();

  expect(SignInComponent).toMatchSnapshot();
});
