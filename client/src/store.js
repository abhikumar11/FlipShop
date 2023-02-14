import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { getProductReducer, productReducer } from "./reducers/ProductReducer";
import { cartReducer } from "./reducers/CartReducer";
import { userReducer,registerReducer } from "./reducers/UserReducer";

const cartItemsFromStorage = localStorage.getItem("cartItems")
     ? JSON.parse(localStorage.getItem("cartItems"))
     : [];
const userInfoFromStorage = localStorage.getItem("userinfo")
     ? JSON.parse(localStorage.getItem("userinfo"))
     : null;
const reducer = combineReducers({
     productList: productReducer,
     singleProductDetails: getProductReducer,
     cart: cartReducer,
     userLogin: userReducer,
     userRegister:registerReducer,
});
const initialState = {
     cart: {
          cartItems: cartItemsFromStorage,
     },
     userLogin: {
          userinfo: userInfoFromStorage,
     },
};
const middleware = [thunk];
const store = createStore(
     reducer,
     initialState,
     composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
