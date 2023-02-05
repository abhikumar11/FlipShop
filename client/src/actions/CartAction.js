import axios from "axios";
import {CART_ADD_ITEM} from "../constants/CartConstants";

export const addToCart=(id,qty)=>async(dispatch,getstate)=>{
        const { data } = await axios.get(`/product/${id}`);
        console.log(data);
        dispatch({
          type: CART_ADD_ITEM,
          payload: {
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            qty,
          },
        });
      
        localStorage.setItem("cartItems", JSON.stringify(getstate().cartItem.cartItems));
}