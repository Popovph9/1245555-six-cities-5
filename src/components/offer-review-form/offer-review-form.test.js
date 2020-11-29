import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {OfferReviewForm} from "./offer-review-form";
import {MOCK_GRADES, MOCK_CURRENT_OFFER} from "../../test-data";
import {noop} from "../../utils";

describe(`Should OfferReviewForm render correctly`, () => {
  const mockStore = configureStore([]);
  let OfferReviewComponent = null;
  let store = null;

  beforeEach(() => {
    store = mockStore({
      STATE: {
        currentOffer: MOCK_CURRENT_OFFER,
      },
    });
  });

  it(`Should Favorites store render correctly when submit button is disabled`, () => {
    OfferReviewComponent = renderer.create(
        <Provider store={store}>
          <OfferReviewForm
            handleSubmit={noop}
            handleFieldChange={noop}
            handleRatingChange={noop}
            isDisabled={true}
            stars={MOCK_GRADES[0]}
            ref={{
              commentRef: React.createRef(),
            }}
          >
          </OfferReviewForm>
        </Provider>
    ).toJSON();

    expect(OfferReviewComponent).toMatchSnapshot();
  });

  it(`Should Favorites store render correctly when submit button is not disabled`, () => {
    OfferReviewComponent = renderer.create(
        <Provider store={store}>
          <OfferReviewForm
            handleSubmit={noop}
            handleFieldChange={noop}
            handleRatingChange={noop}
            isDisabled={false}
            stars={MOCK_GRADES[0]}
            ref={{
              commentRef: React.createRef(),
            }}
          >
          </OfferReviewForm>
        </Provider>
    ).toJSON();

    expect(OfferReviewComponent).toMatchSnapshot();
  });

  it(`Should Favorites store render correctly with 1 star`, () => {
    OfferReviewComponent = renderer.create(
        <Provider store={store}>
          <OfferReviewForm
            handleSubmit={noop}
            handleFieldChange={noop}
            handleRatingChange={noop}
            isDisabled={false}
            stars={MOCK_GRADES[1]}
            ref={{
              commentRef: React.createRef(),
            }}
          >
          </OfferReviewForm>
        </Provider>
    ).toJSON();

    expect(OfferReviewComponent).toMatchSnapshot();
  });

  it(`Should Favorites store render correctly with 2 stars`, () => {
    OfferReviewComponent = renderer.create(
        <Provider store={store}>
          <OfferReviewForm
            handleSubmit={noop}
            handleFieldChange={noop}
            handleRatingChange={noop}
            isDisabled={false}
            stars={MOCK_GRADES[2]}
            ref={{
              commentRef: React.createRef(),
            }}
          >
          </OfferReviewForm>
        </Provider>
    ).toJSON();

    expect(OfferReviewComponent).toMatchSnapshot();
  });

  it(`Should Favorites store render correctly with 3 stars`, () => {
    OfferReviewComponent = renderer.create(
        <Provider store={store}>
          <OfferReviewForm
            handleSubmit={noop}
            handleFieldChange={noop}
            handleRatingChange={noop}
            isDisabled={false}
            stars={MOCK_GRADES[3]}
            ref={{
              commentRef: React.createRef(),
            }}
          >
          </OfferReviewForm>
        </Provider>
    ).toJSON();

    expect(OfferReviewComponent).toMatchSnapshot();
  });

  it(`Should Favorites store render correctly with 4 stars`, () => {
    OfferReviewComponent = renderer.create(
        <Provider store={store}>
          <OfferReviewForm
            handleSubmit={noop}
            handleFieldChange={noop}
            handleRatingChange={noop}
            isDisabled={false}
            stars={MOCK_GRADES[4]}
            ref={{
              commentRef: React.createRef(),
            }}
          >
          </OfferReviewForm>
        </Provider>
    ).toJSON();

    expect(OfferReviewComponent).toMatchSnapshot();
  });

  it(`Should Favorites store render correctly with 5 stars`, () => {
    OfferReviewComponent = renderer.create(
        <Provider store={store}>
          <OfferReviewForm
            handleSubmit={noop}
            handleFieldChange={noop}
            handleRatingChange={noop}
            isDisabled={false}
            stars={MOCK_GRADES[5]}
            ref={{
              commentRef: React.createRef(),
            }}
          >
          </OfferReviewForm>
        </Provider>
    ).toJSON();

    expect(OfferReviewComponent).toMatchSnapshot();
  });
});
