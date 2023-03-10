import {
     ORDER_CREATE_FAIL,
     ORDER_CREATE_REQUEST,
     ORDER_CREATE_SUCCESS,
} from "../constants/OrderConstants";
import axios from "axios";
export const createOrder = (order) => async (dispatch, getstate) => {
     try {
          dispatch({
               type: ORDER_CREATE_REQUEST,
          });
          const {
               userLogin: { userinfo },
          } = getstate();
          const config = {
               headers: {
                    "Contnet-Type": "application/json",
                    Authorization: `Bearer ${userinfo.token}`,
               },
          };
          const { data } = await axios.post("/order", order, config);
          dispatch({ type: ORDER_CREATE_SUCCESS, payload: data });
     } catch (error) {
          dispatch({
               type: ORDER_CREATE_FAIL,
               payload:
                    error.response && error.response.data.message
                         ? error.response.data.message
                         : error.message,
          });
     }
};
