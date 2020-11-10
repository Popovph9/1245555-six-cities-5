import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {fetchOffersList, fetchReviewsList, fetchNearOffersList} from "./store/api-actions";
import {createAPI} from "./services/api";
import {Provider} from "react-redux";
import App from "./components/app/app";
import thunk from "redux-thunk";

import rootReducer from "./store/reducers/root-reducer";

const api = createAPI();

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

Promise.all([
  store.dispatch(fetchOffersList()),
])
.then(() => {
  ReactDOM.render(
      <Provider store={store}>
        <App
          onOfferClick = {(id) => {
            store.dispatch(fetchReviewsList(id));
            store.dispatch(fetchNearOffersList(id));
          }}
        />
      </Provider>,
      document.querySelector(`#root`)
  );
});
