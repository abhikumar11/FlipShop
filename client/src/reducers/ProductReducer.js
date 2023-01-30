import {
     PRODUCT_DETAILS_FAILS,
     PRODUCT_LIST_REQUEST,
     PRODUCT_LIST_SUCCESS,
} from "../constants/ProductConstants";

const initialState = {
     products: [],
};
export const productReducer = (state = initialState, action) => {
     switch (action.type) {
          case PRODUCT_LIST_REQUEST:
               return { loading: true, initialState };
          case PRODUCT_LIST_SUCCESS:
               return { loading: false, initialState: action.payload };
          case PRODUCT_DETAILS_FAILS:
               return { loading: false, error: action.payload };
          default:
               return { state };
     }
};
