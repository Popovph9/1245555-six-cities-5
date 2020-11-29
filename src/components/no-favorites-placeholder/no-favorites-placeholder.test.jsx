import React from "react";
import renderer from "react-test-renderer";
import NoFavoritesPlaceholder from "./no-favorites-placeholder";

it(`Should NoFavoritesPlaceholder render correctly`, () => {
  const NoFavoritesPlaceholderComponent = renderer
  .create(
      <NoFavoritesPlaceholder/>).toJSON();

  expect(NoFavoritesPlaceholderComponent).toMatchSnapshot();
});
