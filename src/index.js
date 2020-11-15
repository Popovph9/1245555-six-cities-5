import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {fetchOffersList, fetchReviewsList, fetchNearOffersList, checkAuth, fetchFavoriteOffersList} from "./store/api-actions";
import {createAPI} from "./services/api";
import {requireAuthorization} from "./store/action";
import {Provider} from "react-redux";
import {AuthorizationStatus} from "./const";
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
])
.then(() => {
  ReactDOM.render(
      <Provider store={store}>
        <App
          onOfferClick = {(id) => {
            store.dispatch(fetchReviewsList(id));
            store.dispatch(fetchNearOffersList(id));
          }}
          getFavorites = {() => {
            store.dispatch(fetchFavoriteOffersList());
          }}
        />
      </Provider>,
      document.querySelector(`#root`)
  );
});
