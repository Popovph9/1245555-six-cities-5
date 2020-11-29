import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import FavoriteItem from "./favorite-item";
import {MOCK_FAVORITE_CURRENT_OFFER} from "../../test-data";
import {noop} from "../../utils";

it(`Should FavoriteItem render correctly`, () => {
  const mockStore = configureStore([]);
  let store = null;
  store = mockStore({});

  const FavoriteItemComponent = renderer.create(
      <Provider store={store}>
        <FavoriteItem
          offer={MOCK_FAVORITE_CURRENT_OFFER}
          onCardClick={noop}
          getCurrentOfferAction={noop}
        >
        </FavoriteItem>
      </Provider>).toJSON();

  expect(FavoriteItemComponent).toMatchSnapshot();
});
