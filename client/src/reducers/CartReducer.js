import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/CartConstants";
export const cartReducer = (state = { cartItems: [] }, action) => {
     switch (action.type) {
       case CART_ADD_ITEM:
         const item = action.payload;
         const exist = state.cartItems.find((p) => p.product === item.product);
         if (exist) {
           return {
             ...state,
             cartItems: state.cartItems.map((p) =>
               p.product === exist.product ? item : p
             ),
           };
         } else {
           return {
             ...state,
             cartItems: [...state.cartItems, item],
           };
         }
         case CART_REMOVE_ITEM:
          return{
            ...state,
            cartItems:state.cartItems.filter((p)=>p.product!==action.payload),
          };
       default:
         return state;
     }
   };