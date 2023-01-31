import {
     PRODUCT_DETAILS_FAILS,
     PRODUCT_DETAILS_SUCCESS,
     PRODUCT_LIST_FAILS,
     PRODUCT_LIST_REQUEST,
     PRODUCT_LIST_SUCCESS,
} from "../constants/ProductConstants";
import axios from "axios";

export const ListProduct = () => async (dispatch) => {
     try {
          dispatch({ type: PRODUCT_LIST_REQUEST });
          const { data } = await axios.get("/products");
          dispatch({
               type: PRODUCT_LIST_SUCCESS,
               payload: data,
          });
     } catch (error) {
          dispatch({
               type: PRODUCT_LIST_FAILS,
               payload:
                    error.response && error.response.data.message
                         ? error.response.data.message
                         : error.message,
          });
     }
};

