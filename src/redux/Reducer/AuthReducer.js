import * as types from "../../utils/actionTypes";

const initialState = {
  user: null,
  loading: false,
  error: null,
  message: null,
};

const userReducer = (state = initialState, action) => {
  console.log("typetypetypetypetypetypetype", types);
  console.log("actionactionactionactionaction", action);
  switch (action.type) {
    case types.REGISTER_USER_REQUEST:
      return { ...state, registerLoader: true };
    case types.REGISTER_USER_SUCCESS:
      return {
        ...state,
        userRegisterSuccess: action.payload,
        registerLoader: false,
      };
    case types.REGISTER_USER_FAILURE:
      return {
        ...state,
        userRegisterError: action.payload,
        registerLoader: false,
      };

    case types.LOGIN_USER_REQUEST:
      return { ...state, logingLoader: true };
    case types.LOGIN_USER_SUCCESS:
      return { ...state,userLoginSuccess: action.payload, logingLoader: false, };
    case types.LOGIN_USER_FAILURE:
      return { ...state, userLoginError: action.payload, logingLoader: false };

      case types.PROFILE_USER_REQUEST:
        return { ...state, profileLoader: true };
      case types.PROFILE_USER_SUCCESS:
        console.log("action.payloadaction.payloadaction.payload",action.payload)
        return { ...state,profileSuccess: action.payload, profileLoader: false, };
      case types.PROFILE_USER_FAILURE:
        return { ...state, profileError: action.payload, profileLoader: false };
  
    default:
      return state;
  }
};

export default userReducer;
