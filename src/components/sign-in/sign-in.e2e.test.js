import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {SignIn} from "./sign-in";
import {AuthorizationStatus} from "../../const";
import {MOCK_CITY, MOCK_NO_USER} from "../../test-data";

configure({adapter: new Adapter()});

it(`Click on logo icon should initiate proper function calls`, () => {
  const onLogoClick = jest.fn();
  const handleSubmit = jest.fn();
  const onSubmit = jest.fn();

  const formComponent = shallow(<SignIn
    city={MOCK_CITY}
    onLogoClick={onLogoClick}
    authorizationStatus={AuthorizationStatus.NO_AUTH}
    currentUser={MOCK_NO_USER}
    handleSubmit={handleSubmit}
    onSubmit = {onSubmit}
    ref={{
      loginRef: React.createRef(),
      passwordRef: React.createRef(),
    }}
  >
  </SignIn>);

  formComponent.find(`.header__logo-link`).at(0).simulate(`click`);
  expect(onLogoClick).toHaveBeenCalledTimes(1);
});

it(`Simulate form submit`, () => {
  const onLogoClick = jest.fn();
  const handleSubmit = jest.fn();
  const onSubmit = jest.fn();

  const formComponent = shallow(<SignIn
    city={MOCK_CITY}
    onLogoClick={onLogoClick}
    authorizationStatus={AuthorizationStatus.NO_AUTH}
    currentUser={MOCK_NO_USER}
    handleSubmit={handleSubmit}
    onSubmit = {onSubmit}
    ref={{
      loginRef: React.createRef(),
      passwordRef: React.createRef(),
    }}
  >
  </SignIn>);

  const form = formComponent.find(`form`);
  form.simulate(`submit`, {preventDefault() {}});
  expect(handleSubmit).toHaveBeenCalledTimes(1);
});
