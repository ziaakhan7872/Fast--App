import { REGISTER_SUCCESS, REGISTER_COMPLETE, REGISTER_ERROR, LOADING,LOGIN_COMPLETE,FORGOT_PASSWORD,FORGOT_PASSWORD_CODE,RESET_PASSWORD, LOGIN_ERROR } from '../types';

const initialState = {
  type: null,
  error: null,
  loading: false,
  message: null,
  login:false,
  loginToken:123,
  registerToken:null,
  forgotpassword:null,
  forgotpasswordcode:null,
  resetpassword:null,
}
export default function (state = initialState, action) {
  //console.log('action',action)
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        type: action.payload,
      };
    case REGISTER_COMPLETE:
      console.log('action.payload',action.payload)
      return {
        ...state,
        registerToken: action.payload
      };
    case REGISTER_ERROR:
      console.log('action.payload',action.payload)
      return {
        ...state,
        error: action.payload
      };

    case LOADING: {
      console.log("loading", state.loading);
      const loading = state.loading;
      return { ...state, loading: !loading }
    }
   
    case FORGOT_PASSWORD: {
      return {
        ...state,
        forgotpassword: action.payload
      };
    }
    case FORGOT_PASSWORD_CODE: {
      return {
        ...state,
        forgotpasswordcode: action.payload
      };
    }
    case RESET_PASSWORD: {
      return {
        ...state,
        resetpassword: action.payload
      };
    }
    case 
    LOGIN_ERROR: {
      return {
        ...state,
        login: action.payload
      };
    }
    case 
    "LOGIN_TOKEN": {
      ///console.log('loginToken',action.payload)
      return {
        ...state,
        loginToken: action.payload
      };
    }
    
    
    default:
      return state;
  }
}