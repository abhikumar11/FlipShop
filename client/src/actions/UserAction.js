import axios from "axios";
import {
     USER_DETAIL_FAIL,
     USER_DETAIL_REQUEST,
     USER_DETAIL_SUCCESS,
     USER_LOGIN_FAIL,
     USER_LOGIN_REQUEST,
     USER_LOGIN_SUCCESS,
     USER_LOGOUT,
     USER_REGISTER_FAIL,
     USER_REGISTER_REQUEST,
     USER_REGISTER_SUCCESS,
} from "../constants/UserConstants";

export const userLogin = (email, password) => async (dispatch) => {
     try {
          dispatch({ type: USER_LOGIN_REQUEST });
          const config = { headers: { "Content-Type": "application/json" } };
          const { data } = await axios.post(
               "/user/login",
               { email, password },
               config
          );
          dispatch({
               type: USER_LOGIN_SUCCESS,
               payload: data,
          });
          localStorage.getItem("userinfo", JSON.stringify(data));
     } catch (error) {
          dispatch({
               type: USER_LOGIN_FAIL,
               payload:
                    error.response && error.response.data.message
                         ? error.response.data.message
                         : error.message,
          });
     }
};
export const userLogout = () => (dispatch) => {
     localStorage.removeItem("userinfo");
     dispatch({ type: USER_LOGOUT });
};
export const userRegister = (name, email, password) => async (dispatch) => {
     try {
          dispatch({ type: USER_REGISTER_REQUEST });
          const config = { headers: { "Content-Type": "application/json" } };
          const { data } = await axios.post(
               "/user",
               { name, email, password },
               config
          );
          dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
          dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
          localStorage.setItem("userinfo", JSON.stringify(data));
     } catch (error) {
          dispatch({
               type: USER_REGISTER_FAIL,
               payload:
                    error.response && error.response.data.message
                         ? error.response.data.message
                         : error.message,
          });
     }
};

export const getUserDetails = () => async (dispatch,getState) => {
     try {
          dispatch({
            type: USER_DETAIL_REQUEST,
          });
          const {
            userLogin: { userinfo },
          } = getState();
          const config = {
            headers: {
              "Contnet-Type": "application/json",
              Authorization: `Bearer ${userinfo.token}`,
            },
          };
          const { data } = await axios.get(`/user/profile`, config);
      
          dispatch({
            type: USER_DETAIL_SUCCESS,
            payload: data,
          });
        } catch (error) {
          dispatch({
            type: USER_DETAIL_FAIL,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
        }
};

export const updateUserDetails =(user)=>async(dispatch,getstate)=>
{
     
}