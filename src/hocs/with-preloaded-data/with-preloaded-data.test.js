import React from "react";
import renderer from "react-test-renderer";
import withPreloadedData from "./with-preloaded-data";
import {MOCK_NO_USER, MOCK_CURRENT_OFFER, MOCK_REVIEWS, MOCK_OFFERS} from "../../test-data";
import {AuthorizationStatus} from "../../const";
import {noop} from "../../utils";

const MockComponent = () => {

  return (
    <div></div>
  );
};

const MockComponentWrapped = withPreloadedData(MockComponent);

it(`withPreloadedData is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped
      id={MOCK_CURRENT_OFFER.id}
      onEmailClick={noop}
      getFavorites={noop}
      onLogoClick={noop}
      onCardClick={noop}
      loadOfferData={noop}
      refreshOfferList={noop}
      refreshNearOffersList={noop}
      currentOffer={MOCK_CURRENT_OFFER}
      reviews={MOCK_REVIEWS}
      nearOffers={MOCK_OFFERS}
      changeFavoriteAction={noop}
      redirectToRouteAction={noop}
      authorizationStatus={AuthorizationStatus.NO_AUTH}
      currentUser={MOCK_NO_USER}
    >
    </MockComponentWrapped>
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
