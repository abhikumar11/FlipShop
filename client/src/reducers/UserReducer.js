import {
     USER_LOGIN_REQUEST,
     USER_LOGIN_SUCCESS,
     USER_LOGIN_FAIL,
     USER_LOGOUT,
     USER_REGISTER_REQUEST,
     USER_REGISTER_SUCCESS,
     USER_REGISTER_FAIL,
     USER_DETAIL_REQUEST,
     USER_DETAIL_SUCCESS,
     USER_DETAIL_FAIL,
     USER_DETAIL_RESET,
     USER_UPDATE_REQUEST,
     USER_UPDATE_SUCCESS,
     USER_UPDATE_FAIL
} from "../constants/UserConstants";

export const userReducer = (state = {}, action) => {
     switch (action.type) {
          case USER_LOGIN_REQUEST:
            return { loading: true };
          case USER_LOGIN_SUCCESS:
            return { loading: false, userinfo: action.payload };
          case USER_LOGIN_FAIL:
            return { loading: false, error: action.payload };
          case USER_LOGOUT:
            return {};
          default:
            return state;
        }
};

export const registerReducer = (state = {}, action) => {
  switch (action.type) {
       case USER_REGISTER_REQUEST:
         return { loading: true };
       case USER_REGISTER_SUCCESS:
         return { loading: false, userinfo: action.payload };
       case USER_REGISTER_FAIL:
         return { loading: false, error: action.payload };
       default:
         return state;
     }
};
export const userDetailReducer=(state={user:{}},action)=>{
  switch (action.type) {
    case USER_DETAIL_REQUEST:
      return { ...state, loading: true };
    case USER_DETAIL_SUCCESS:
      return { loading: false, user: action.payload };
    case USER_DETAIL_FAIL:
      return { loading: false, error: action.payload };
    case USER_DETAIL_RESET:
      return { user: {} };
    default:
      return state;
  }

}
export const userUpdateReducer=(state={},action)=>{
  switch (action.type) {
    case USER_UPDATE_REQUEST:
      return { loading: true };
    case USER_UPDATE_SUCCESS:
      return { loading: false,success:true, userinfo: action.payload };
    case USER_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }

}