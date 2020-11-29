import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {fetchOffersList, fetchReviewsList, fetchNearOffersList, checkAuth, fetchFavoriteOffersList, fetchCurrentOffer} from "./store/api-actions";
import {createAPI} from "./services/api";
import {requireAuthorization} from "./store/action";
import {Provider} from "react-redux";
import {AuthorizationStatus, FIRST_HOTEL_INDEX} from "./const";
import App from "./components/app/app";
import thunk from "redux-thunk";
import {redirect} from "./store/middlewares/redirect";

import rootReducer from "./store/reducers/root-reducer";

const api = createAPI(
    () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    )
);

Promise.all([
  store.dispatch(fetchOffersList()),
  store.dispatch(checkAuth()),
  store.dispatch(fetchReviewsList(FIRST_HOTEL_INDEX)),
  store.dispatch(fetchNearOffersList(FIRST_HOTEL_INDEX)),
  store.dispatch(fetchCurrentOffer(FIRST_HOTEL_INDEX)),
])
.then(() => {
  ReactDOM.render(
      <Provider store={store}>
        <App
          loadOfferData={(id) => {
            store.dispatch(fetchCurrentOffer(id));
            store.dispatch(fetchReviewsList(id));
            store.dispatch(fetchNearOffersList(id));
          }}
          getFavorites={() => {
            store.dispatch(fetchFavoriteOffersList());
          }}
          refreshOfferList={() => {
            store.dispatch(fetchOffersList());
          }}
          refreshNearOffersList={(id) => {
            store.dispatch(fetchReviewsList(id));
            store.dispatch(fetchNearOffersList(id));
          }}
        />
      </Provider>,
      document.querySelector(`#root`)
  );
});
