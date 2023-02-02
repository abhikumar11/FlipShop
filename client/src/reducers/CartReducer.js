import { CART_ADD_ITEM } from "../constants";
export const CartReducer = (state = { cartItems: [] }, action) => {
     switch (action.type) {
          case CART_ADD_ITEM:
               const item = action.payload;
               const exist = state.cartItems.find(
                    (p) => p.product === item.product
               );
               if (exist) {
                    return {
                         ...state,
                         cartItems: state.cartItems.map((p) =>
                              p.product === exist.product ? item : p
                         ),
                    };
               } else {
                    return { ...state, cartItems: [...state.cartItems, item] };
               }
          default:
               return { state };
     }
};
