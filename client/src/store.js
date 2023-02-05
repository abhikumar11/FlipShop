import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {getProductReducer, productReducer} from "./reducers/ProductReducer"
import { CartReducer } from "./reducers/CartReducer";


const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const reducer = combineReducers({
     productList:productReducer,
     singleProductDetails:getProductReducer,
     cartItem:CartReducer
});
const initialState = {
     cartItem: { cartItems: cartItemsFromStorage },
};
const middleware = [thunk];
const store = createStore(
     reducer,
     initialState,
     composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
