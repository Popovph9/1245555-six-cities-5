import React from "react";
import renderer from "react-test-renderer";
import {OfferCard} from "./offer-card";
import {CITIES_SUBCLASS, PLACES_SUBCLASS, AuthorizationStatus} from "../../const";
import {noop} from "../../utils";
import {MOCK_OFFERS, MOCK_CURRENT_OFFER, MOCK_FAVORITE_OFFERS} from "../../test-data";

describe(`Should OfferCard render correctly`, () => {

  it(`Should OfferCard render correctly with main page class and unauthorized user`, () => {
    const OfferCardComponent = renderer.create(

        <OfferCard
          className={CITIES_SUBCLASS}
          offers={MOCK_OFFERS}
          onCardClick={noop}
          setActivePinAction={noop}
          resetActivePinAction={noop}
          refreshOfferList={noop}
          currentOfferId={MOCK_CURRENT_OFFER.id}
          authorizationStatus={AuthorizationStatus.NO_AUTH}
          refreshNearOffersList={noop}
          changeFavoriteAction={noop}
          getCurrentOfferAction={noop}
          redirectToRouteAction={noop}
        />).toJSON();

    expect(OfferCardComponent).toMatchSnapshot();
  });

  it(`Should OfferCard render correctly with main page class and authorized user`, () => {
    const OfferCardComponent = renderer.create(

        <OfferCard
          className={CITIES_SUBCLASS}
          offers={MOCK_FAVORITE_OFFERS}
          onCardClick={noop}
          setActivePinAction={noop}
          resetActivePinAction={noop}
          refreshOfferList={noop}
          currentOfferId={MOCK_CURRENT_OFFER.id}
          authorizationStatus={AuthorizationStatus.AUTH}
          refreshNearOffersList={noop}
          changeFavoriteAction={noop}
          getCurrentOfferAction={noop}
          redirectToRouteAction={noop}
        />).toJSON();

    expect(OfferCardComponent).toMatchSnapshot();
  });

  it(`Should OfferCard render correctly with secondary page class and unauthorized user`, () => {
    const OfferCardComponent = renderer.create(

        <OfferCard
          className={PLACES_SUBCLASS}
          offers={MOCK_OFFERS}
          onCardClick={noop}
          setActivePinAction={noop}
          resetActivePinAction={noop}
          refreshOfferList={noop}
          currentOfferId={MOCK_CURRENT_OFFER.id}
          authorizationStatus={AuthorizationStatus.NO_AUTH}
          refreshNearOffersList={noop}
          changeFavoriteAction={noop}
          getCurrentOfferAction={noop}
          redirectToRouteAction={noop}
        />).toJSON();

    expect(OfferCardComponent).toMatchSnapshot();
  });

  it(`Should OfferCard render correctly with secondary page class and authorized user`, () => {
    const OfferCardComponent = renderer.create(

        <OfferCard
          className={PLACES_SUBCLASS}
          offers={MOCK_FAVORITE_OFFERS}
          onCardClick={noop}
          setActivePinAction={noop}
          resetActivePinAction={noop}
          refreshOfferList={noop}
          currentOfferId={MOCK_CURRENT_OFFER.id}
          authorizationStatus={AuthorizationStatus.AUTH}
          refreshNearOffersList={noop}
          changeFavoriteAction={noop}
          getCurrentOfferAction={noop}
          redirectToRouteAction={noop}
        />).toJSON();

    expect(OfferCardComponent).toMatchSnapshot();
  });
});
