import React from "react";
import renderer from "react-test-renderer";
import PropertyBookmarkButton from "./property-bookmark-button";
import {AuthorizationStatus} from "../../const";
import {noop} from "../../utils";
import {MOCK_FAVORITE_CURRENT_OFFER, MOCK_CURRENT_OFFER} from "../../test-data";

describe(`Should PropertyBookmarkButton render correctly`, () => {
  it(`Should PropertyBookmarkButton render correctly with no favorite offers and unauthorized user`, () => {
    const PropertyBookmarkButtonComponent = renderer.create(
        <PropertyBookmarkButton
          currentOffer={MOCK_CURRENT_OFFER}
          authorizationStatus={AuthorizationStatus.NO_AUTH}
          changeFavoriteAction={noop}
          refreshOfferList={noop}
          redirectToRoute={noop}
        />).toJSON();

    expect(PropertyBookmarkButtonComponent).toMatchSnapshot();
  });

  it(`Should PropertyBookmarkButton render correctly with favorite offer and authorized user`, () => {
    const PropertyBookmarkButtonComponent = renderer.create(
        <PropertyBookmarkButton
          currentOffer={MOCK_FAVORITE_CURRENT_OFFER}
          authorizationStatus={AuthorizationStatus.AUTH}
          changeFavoriteAction={noop}
          refreshOfferList={noop}
          redirectToRoute={noop}
        />).toJSON();

    expect(PropertyBookmarkButtonComponent).toMatchSnapshot();
  });
});
