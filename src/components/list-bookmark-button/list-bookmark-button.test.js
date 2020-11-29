import React from "react";
import renderer from "react-test-renderer";
import ListBookmarkButton from "./list-bookmark-button";
import {CITIES_SUBCLASS, PLACES_SUBCLASS, AuthorizationStatus} from "../../const";
import {MOCK_CURRENT_OFFER} from "../../test-data";
import {noop} from "../../utils";

describe(`Should ListBookmarkButton render correctly`, () => {
  it(`Should ListBookmarkButton render correctly with main page class`, () => {
    const ListBookmarkButtonComponent = renderer.create(

        <ListBookmarkButton
          className={CITIES_SUBCLASS}
          offer={MOCK_CURRENT_OFFER}
          authorizationStatus={AuthorizationStatus.NO_AUTH}
          changeFavoriteAction={noop}
          refreshOfferList={noop}
          redirectToRoute={noop}
          currentOfferId={MOCK_CURRENT_OFFER.id}
          refreshNearOffersList={noop}
        />).toJSON();

    expect(ListBookmarkButtonComponent).toMatchSnapshot();
  });

  it(`Should ListBookmarkButton render correctly with secondary page class`, () => {
    const ListBookmarkButtonComponent = renderer.create(

        <ListBookmarkButton
          className={PLACES_SUBCLASS}
          offer={MOCK_CURRENT_OFFER}
          authorizationStatus={AuthorizationStatus.NO_AUTH}
          changeFavoriteAction={noop}
          refreshOfferList={noop}
          redirectToRoute={noop}
          currentOfferId={MOCK_CURRENT_OFFER.id}
          refreshNearOffersList={noop}
        />).toJSON();

    expect(ListBookmarkButtonComponent).toMatchSnapshot();
  });
});
