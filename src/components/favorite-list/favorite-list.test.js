import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import FavoriteList from "./favorite-list";
import {MOCK_FAVORITE_OFFERS} from "../../test-data";
import {noop} from "../../utils";

it(`Should FavoriteList render correctly`, () => {
  const mockStore = configureStore([]);
  let store = null;
  store = mockStore({});

  const FavoriteListComponent = renderer.create(
      <Provider store={store}>
        <FavoriteList
          favoriteOffers={MOCK_FAVORITE_OFFERS}
          onCardClick={noop}
        >
        </FavoriteList>
      </Provider>).toJSON();

  expect(FavoriteListComponent).toMatchSnapshot();
});
