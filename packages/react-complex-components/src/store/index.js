import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

export default function configureStore(reducer) {
  const store = createStore(reducer, applyMiddleware(thunk));

  return store;
}
