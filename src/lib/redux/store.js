import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Reducer from "./reducers";

const middleware = [thunk];

const Store = createStore(Reducer, applyMiddleware(...middleware));

export default Store;
