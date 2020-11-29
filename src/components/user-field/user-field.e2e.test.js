import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import UserField from "./user-field";
import {AuthorizationStatus} from "../../const";

configure({adapter: new Adapter()});

it(`Click on list option should initiate proper function calls when the user is unauthorized`, () => {
  const onEmailClick = jest.fn();
  const getFavorites = jest.fn();

  const wrapper = shallow(<UserField
    authorizationStatus={AuthorizationStatus.NO_AUTH}
    onEmailClick={onEmailClick}
    getFavorites={getFavorites}
  >
  </UserField>);

  wrapper.find(`.header__login`).at(0).simulate(`click`);
  expect(onEmailClick).toHaveBeenCalledTimes(1);
});

it(`Click on list option should initiate proper function calls when the user is logged in`, () => {
  const onEmailClick = jest.fn();
  const getFavorites = jest.fn();

  const wrapper = shallow(<UserField
    authorizationStatus={AuthorizationStatus.AUTH}
    onEmailClick={onEmailClick}
    getFavorites={getFavorites}
  >
  </UserField>);

  wrapper.find(`.header__user-name`).at(0).simulate(`click`);
  expect(onEmailClick).toHaveBeenCalledTimes(1);
  expect(getFavorites).toHaveBeenCalledTimes(1);
});
