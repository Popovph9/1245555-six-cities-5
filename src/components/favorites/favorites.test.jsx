import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {Favorites} from "./favorites";
import {MOCK_FAVORITE_OFFERS, MOCK_USER} from "../../test-data";
import {noop} from "../../utils";

describe(`Should Favorites connected to store render correctly`, () => {
  const mockStore = configureStore([]);
  let FavoritesComponent = null;
  let store = null;

  it(`Should Favorites render correctly`, () => {
    store = mockStore({});

    FavoritesComponent = renderer.create(
        <Provider store={store}>
          <Favorites
            onLogoClick = {noop}
            onCardClick={noop}
            currentUser={MOCK_USER}
            offers={MOCK_FAVORITE_OFFERS}
          >
          </Favorites>
        </Provider>).toJSON();

    expect(FavoritesComponent).toMatchSnapshot();
  });

  it(`Should Favorites render correctly with no favorite offers`, () => {

    FavoritesComponent = renderer.create(

        <Favorites
          currentUser={MOCK_USER}
          offers={[]}
        >
        </Favorites>
    ).toJSON();

    expect(FavoritesComponent).toMatchSnapshot();
  });
});
