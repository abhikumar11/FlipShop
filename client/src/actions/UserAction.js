import axios from "axios";
import {
     USER_LOGIN_REQUEST,
     USER_LOGIN_SUCCESS,
} from "../constants/UserConstants";

export const userLogin = (email, password) => async (dispatch) => {
     try {
          dispatch({ type: USER_LOGIN_REQUEST });
          const cofig = { headers: { "Content-Type": "application/json" } };
          const { data } = await axios.post(
               "/user/login",
               { email, password },
               cofig
          );
          dispatch({ 
            type: USER_LOGIN_SUCCESS,
            payload: data 
            });
            localStorage.getItem('userinfo')
     } catch (error) {}
};
