import React from "react";
import renderer from "react-test-renderer";
import PlacesBookmarkButton from "./places-bookmark-button";
import {AuthorizationStatus} from "../../const";
import {noop} from "../../utils";
import {MOCK_FAVORITE_CURRENT_OFFER, MOCK_CURRENT_OFFER} from "../../test-data";

describe(`Should PlacesBookmarkButton render correctly`, () => {
  it(`Should PlacesBookmarkButton render correctly with no favorite offers and unauthorized user`, () => {
    const PlacesBookmarkButtonComponent = renderer.create(
        <PlacesBookmarkButton
          offer={MOCK_CURRENT_OFFER}
          authorizationStatus={AuthorizationStatus.NO_AUTH}
          changeFavoriteAction={noop}
          refreshOfferList={noop}
          redirectToRoute={noop}
          currentOfferId={MOCK_CURRENT_OFFER.id}
          refreshNearOffersList={noop}
        />).toJSON();

    expect(PlacesBookmarkButtonComponent).toMatchSnapshot();
  });

  it(`Should PlacesBookmarkButton render correctly with favorite offer and authorized user`, () => {
    const PlacesBookmarkButtonComponent = renderer.create(
        <PlacesBookmarkButton
          offer={MOCK_FAVORITE_CURRENT_OFFER}
          authorizationStatus={AuthorizationStatus.AUTH}
          changeFavoriteAction={noop}
          refreshOfferList={noop}
          redirectToRoute={noop}
          currentOfferId={MOCK_CURRENT_OFFER.id}
          refreshNearOffersList={noop}
        />).toJSON();

    expect(PlacesBookmarkButtonComponent).toMatchSnapshot();
  });
});
