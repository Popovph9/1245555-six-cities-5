import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {shallow, configure} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import {Main} from "./main";
import {
  MOCK_CITY,
  MOCK_NO_USER,
  MOCK_USER,
  MOCK_SORTING,
  MOCK_OFFERS,
  MOCK_CURRENT_OFFER,
  MOCK_FAVORITE_OFFERS,
  MOCK_FAVORITE_CURRENT_OFFER} from "../../test-data";
import {AuthorizationStatus} from "../../const";
import {noop} from "../../utils";

configure({adapter: new Adapter()});

describe(`Should Main connected to store render correctly`, () => {
  const mockStore = configureStore([]);
  let store = null;
  let MainComponent = null;

  it(`Should Main render correctly without offers when the user is unauthorized`, () => {
    store = mockStore({});

    MainComponent = renderer.create(
        <Provider store={store}>
          <Main
            onEmailClick = {noop}
            onCardClick={noop}
            getFavorites={noop}
            refreshOfferList={noop}
            changeCityAction={noop}
            changeSortingAction={noop}
            getOffersAction={noop}
            sortOffersAction={noop}
            activePin={null}
            currentUser={MOCK_NO_USER}
            offers={[]}
            city={MOCK_CITY}
            currentSorting={MOCK_SORTING}
            authorizationStatus={AuthorizationStatus.NO_AUTH}
          >
          </Main>
        </Provider>
    )
  .toJSON();

    expect(MainComponent).toMatchSnapshot();
  });

  it(`Should Main render correctly without offers when the user is logged-in`, () => {

    MainComponent = renderer.create(
        <Provider store={store}>
          <Main
            onEmailClick = {noop}
            onCardClick={noop}
            getFavorites={noop}
            refreshOfferList={noop}
            changeCityAction={noop}
            changeSortingAction={noop}
            getOffersAction={noop}
            sortOffersAction={noop}
            activePin={null}
            currentUser={MOCK_USER}
            offers={[]}
            city={MOCK_CITY}
            currentSorting={MOCK_SORTING}
            authorizationStatus={AuthorizationStatus.AUTH}
          >
          </Main>
        </Provider>
    ).toJSON();

    expect(MainComponent).toMatchSnapshot();
  });

  it(`Should Main render correctly when the user is unauthorized`, () => {
    store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        currentUser: MOCK_NO_USER,
      },
      STATE: {
        currentOffer: MOCK_CURRENT_OFFER,
      },
    });

    MainComponent = renderer.create(shallow(
        <Provider store={store}>
          <Main
            onEmailClick = {noop}
            onCardClick={noop}
            getFavorites={noop}
            refreshOfferList={noop}
            changeCityAction={noop}
            changeSortingAction={noop}
            getOffersAction={noop}
            sortOffersAction={noop}
            activePin={null}
            currentUser={MOCK_NO_USER}
            offers={MOCK_OFFERS}
            city={MOCK_CITY}
            currentSorting={MOCK_SORTING}
            authorizationStatus={AuthorizationStatus.NO_AUTH}
          />
        </Provider>)).toJSON();

    expect(MainComponent).toMatchSnapshot();
  });

  it(`Should Main render correctly when the user is logged in`, () => {
    store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        currentUser: MOCK_USER,
      },
      STATE: {
        currentOffer: MOCK_FAVORITE_CURRENT_OFFER,
      },
    });

    MainComponent = renderer.create(shallow(
        <Provider store={store}>
          <Main
            onEmailClick = {noop}
            onCardClick={noop}
            getFavorites={noop}
            refreshOfferList={noop}
            changeCityAction={noop}
            changeSortingAction={noop}
            getOffersAction={noop}
            sortOffersAction={noop}
            activePin={null}
            currentUser={MOCK_USER}
            offers={MOCK_FAVORITE_OFFERS}
            city={MOCK_CITY}
            currentSorting={MOCK_SORTING}
            authorizationStatus={AuthorizationStatus.AUTH}
          />
        </Provider>)).toJSON();

    expect(MainComponent).toMatchSnapshot();
  });
});
