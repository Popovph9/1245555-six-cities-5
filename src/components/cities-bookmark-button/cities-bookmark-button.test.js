import React from "react";
import renderer from "react-test-renderer";
import CitiesBookmarkButton from "./cities-bookmark-button";
import {AuthorizationStatus} from "../../const";
import {noop} from "../../utils";
import {MOCK_FAVORITE_CURRENT_OFFER, MOCK_CURRENT_OFFER} from "../../test-data";

describe(`Should CitiesBookmarkButton render correctly`, () => {
  it(`Should CitiesBookmarkButton render correctly with no favorite offers and unauthorized user`, () => {
    const CitiesBookmarkButtonComponent = renderer.create(
        <CitiesBookmarkButton
          offer={MOCK_CURRENT_OFFER}
          authorizationStatus={AuthorizationStatus.NO_AUTH}
          changeFavoriteAction={noop}
          refreshOfferList={noop}
          redirectToRoute={noop}
        />).toJSON();

    expect(CitiesBookmarkButtonComponent).toMatchSnapshot();
  });

  it(`Should CitiesBookmarkButton render correctly with favorite offer and authorized user`, () => {
    const CitiesBookmarkButtonComponent = renderer.create(
        <CitiesBookmarkButton
          offer={MOCK_FAVORITE_CURRENT_OFFER}
          authorizationStatus={AuthorizationStatus.AUTH}
          changeFavoriteAction={noop}
          refreshOfferList={noop}
          redirectToRoute={noop}
        />).toJSON();

    expect(CitiesBookmarkButtonComponent).toMatchSnapshot();
  });
});
