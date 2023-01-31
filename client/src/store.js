import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {getProductReducer, productReducer} from "./reducers/ProductReducer"
const reducer = combineReducers({
     productList:productReducer,
     singleProductDetails:getProductReducer,
});
const initislState = {};
const middleware = [thunk];
const store = createStore(
     reducer,
     initislState,
     composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
